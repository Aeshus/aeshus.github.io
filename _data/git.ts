const command = new Deno.Command("git", {
  args: ["rev-parse", "--short", "HEAD"],
});

const { code, stdout, stderr } = await command.output();

if (code !== 0) {
  const errMessage = new TextDecoder().decode(stderr).trim();
  throw new Error(`Unable to get git hash: ${errMessage}`);
}

const hash = new TextDecoder().decode(stdout).trim() || "ERROR";

export { hash };
