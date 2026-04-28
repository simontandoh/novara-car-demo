import { trpc } from "@/providers/trpc";
import { useCallback, useMemo } from "react";

export function useAuth() {
  const utils = trpc.useUtils();

  const {
    data: oauthUser,
    isLoading: oauthLoading,
  } = trpc.auth.me.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const {
    data: localUser,
    isLoading: localLoading,
  } = trpc.localAuth.me.useQuery(undefined, {
    staleTime: 1000 * 60 * 5,
    retry: false,
  });

  const logoutMutation = trpc.auth.logout.useMutation({
    onSuccess: async () => {
      await utils.invalidate();
    },
  });

  const localLogoutMutation = trpc.localAuth.logout.useMutation({
    onSuccess: async () => {
      await utils.invalidate();
    },
  });

  const logout = useCallback(() => {
    logoutMutation.mutate();
    localLogoutMutation.mutate();
    window.location.reload();
  }, [logoutMutation, localLogoutMutation]);

  const user = oauthUser || (localUser ? {
    id: localUser.id,
    unionId: `local_${localUser.id}`,
    name: localUser.displayName || localUser.username,
    email: localUser.email,
    avatar: null,
    role: localUser.role,
    createdAt: localUser.createdAt,
    updatedAt: localUser.createdAt,
    lastSignInAt: localUser.createdAt,
  } : null);

  const isLoading = oauthLoading || localLoading;

  return useMemo(
    () => ({
      user: user ?? null,
      isAuthenticated: !!user,
      isLoading: isLoading || logoutMutation.isPending || localLogoutMutation.isPending,
      isAdmin: user?.role === "admin",
      logout,
    }),
    [user, isLoading, logoutMutation.isPending, localLogoutMutation.isPending, logout],
  );
}
