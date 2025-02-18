import { VisualEditing } from "@sanity/visual-editing/react-router";
import { DisablePreviewMode } from "./DisablePreviewMode";
export function SanityVisualEditing() {
  return (
    <>
      <VisualEditing zIndex={1000}/>
      <DisablePreviewMode />
    </>
  );
}