import { PropsWithChildren } from "react";

export const LinkToNewTab = ({ url, children }: PropsWithChildren<{ url: string }>) => <a href={url} target="_blank" rel="noreferrer">{children}</a>