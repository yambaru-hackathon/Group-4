"use client";
import { RecoilRoot } from 'recoil';
import "@/styles/global.css";

export default function Provider({ children }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}