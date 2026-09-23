// Single source of truth for app config.
const config = {
  port: 6005,
  siteUrl: "https://sagarhv001.me",
  title: "Sagar's Website",
  description: "Portfolio",
};

module.exports = config;

// ponytail: thin wrapper so `port` lives in one file — npm scripts can't import JS.
if (require.main === module) {
  const { spawn } = require("child_process");
  const cmd = process.argv[2] || "dev";
  spawn("next", [cmd, "-p", config.port], { stdio: "inherit", shell: true }).on(
    "exit",
    (code) => process.exit(code ?? 0)
  );
}
