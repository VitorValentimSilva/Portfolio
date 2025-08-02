import { useTheme } from "../hooks/useTheme";

interface TitleFieldProps {
  title: string;
  description?: string;
}

export default function TitleField({ title, description }: TitleFieldProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      <h2
        className={`inline-block text-5xl font-bold border-b-4 pb-4 text-center
        ${
          theme === "dark" ? "text-PrimaryDarkTheme" : "text-PrimaryLightTheme"
        }`}
      >
        {title}
      </h2>

      <p
        className={`text-lg text-center w-2xl
        ${
          theme === "dark"
            ? "text-BackgroundLightTheme/60"
            : "text-BackgroundDarkTheme/60"
        }`}
      >
        {description}
      </p>
    </div>
  );
}
