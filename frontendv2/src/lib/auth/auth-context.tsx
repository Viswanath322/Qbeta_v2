import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Role = "admin" | "org_manager" | "engineer";

export type User = {
  id: string;
  name: string;
  email: string;
  organization: string;
  role: Role;
  initials: string;
};

export const ROLE_LABEL: Record<Role, string> = {
  admin: "Admin",
  org_manager: "Organization Manager",
  engineer: "Engineer",
};

export const DEMO_ACCOUNTS: Array<{
  role: Role;
  email: string;
  password: string;
  name: string;
  organization: string;
}> = [
  {
    role: "admin",
    email: "admin@silicofeller.com",
    password: "admin",
    name: "Alex Admin",
    organization: "Silicofeller",
  },
  {
    role: "org_manager",
    email: "manager@quantumlabs.com",
    password: "manager",
    name: "Mira Chen",
    organization: "Quantum Labs",
  },
  {
    role: "engineer",
    email: "engineer@quantumlabs.com",
    password: "engineer",
    name: "Eli Novak",
    organization: "Quantum Labs",
  },
];

const STORAGE_KEY = "silicofeller.auth.user";

type AuthContextValue = {
  user: User | null;
  hydrated: boolean;
  signIn: (email: string, password: string) => { ok: true } | { ok: false; error: string };
  signInAs: (role: Role) => void;
  signUp: (data: { name: string; email: string; organization: string }) => void;
  signOut: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function userFromDemo(role: Role): User {
  const acct = DEMO_ACCOUNTS.find((a) => a.role === role)!;
  return {
    id: `demo-${role}`,
    name: acct.name,
    email: acct.email,
    organization: acct.organization,
    role,
    initials: initials(acct.name),
  };
}

function userFromSignUp(data: { name: string; email: string; organization: string }): User {
  return {
    id: `user-${Date.now()}`,
    name: data.name.trim(),
    email: data.email.trim().toLowerCase(),
    organization: data.organization.trim(),
    role: "org_manager",
    initials: initials(data.name),
  };
}

export function canAccess(role: Role, page: "team" | "billing" | "admin"): boolean {
  if (page === "admin") return role === "admin";
  if (page === "team" || page === "billing") return role === "admin" || role === "org_manager";
  return false;
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setUser(JSON.parse(raw) as User);
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      if (user) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
      else window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore quota errors */
    }
  }, [user, hydrated]);

  const signIn = useCallback((email: string, password: string) => {
    const normalized = email.trim().toLowerCase();
    const match = DEMO_ACCOUNTS.find(
      (a) => a.email === normalized && a.password === password,
    );
    if (!match) {
      return { ok: false as const, error: "Invalid email or password" };
    }
    setUser(userFromDemo(match.role));
    return { ok: true as const };
  }, []);

  const signInAs = useCallback((role: Role) => {
    setUser(userFromDemo(role));
  }, []);

  const signUp = useCallback((data: { name: string; email: string; organization: string }) => {
    setUser(userFromSignUp(data));
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
  }, []);

  const value = useMemo(
    () => ({ user, hydrated, signIn, signInAs, signUp, signOut }),
    [user, hydrated, signIn, signInAs, signUp, signOut],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
