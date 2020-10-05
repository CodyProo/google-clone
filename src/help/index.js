export const FormatAboutSearch = (link) => link.split("/").filter((_, index) => index > 1 && index < 5 && _ !== "");
export const removeBreakTag = (content) => content.replace(/<br>/g, " ");
export const CreateArrayPages = (end) => Array.from(Array(end).keys());