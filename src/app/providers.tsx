"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Toaster } from "react-hot-toast";
import type { NicheTheme } from "@/config/types";

export function Providers({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme: NicheTheme;
}) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: theme.primary,
            colorInfo: theme.accent,
            colorSuccess: theme.primary,
            colorWarning: theme.secondary,
            borderRadius: 14,
            fontFamily: "var(--font-body), system-ui, sans-serif",
          },
        }}
      >
        {children}
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3200,
            style: {
              borderRadius: "14px",
              background: theme.ink,
              color: "#fff",
              fontSize: "14px",
            },
          }}
        />
      </ConfigProvider>
    </AntdRegistry>
  );
}
