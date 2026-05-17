import { useTheme } from "../../components/theme/ThemeContext";

export default function Section({label,children,mt=0}){
  const { theme } = useTheme();
  const isDusk = theme === 'dusk';

  return(
    <div style={{marginBottom:40,marginTop:mt}}>
      <div style={{
        fontSize:9,
        letterSpacing:"0.22em",
        color: isDusk ? "rgba(216,180,254,0.9)" : "#a855f7",
        marginBottom:18,
        paddingBottom:10,
        borderBottom: isDusk ? "1px solid rgba(255,255,255,.04)" : "1px solid rgba(15,23,42,.08)",
        fontFamily:"'Courier New',monospace"
      }}>
        {label}
      </div>
      {children}
    </div>
  );
}
