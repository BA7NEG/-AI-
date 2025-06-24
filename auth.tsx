import { createContext, useContext, useState } from "react";

interface AuthContextType {
  isAuthenticated: boolean;
  user: User | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

interface User {
  id: string;
  username: string;
  role: "admin" | "teacher" | "student";
  name: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (username: string, password: string) => {
    // 模拟登录验证
    if (username && password) {
      // 模拟不同角色用户
      let role: "admin" | "teacher" | "student" = "student";
      if (username === "admin") {
        role = "admin";
      } else if (username === "teacher") {
        role = "teacher";
      }

      const user: User = {
        id: Math.random().toString(36).substring(2, 9),
        username,
        role,
        name: username === "admin" ? "管理员" : username === "teacher" ? "金融学教师" : "金融学学生",
      };

      setUser(user);
      setIsAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
