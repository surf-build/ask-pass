function responseForPrompt(prompt: string, username: string, password: string): string | null {
  if (prompt.startsWith('Username')) {
    return username;
  } else if (prompt.startsWith('Password')) {
    return password;
  }

  return null;
}

function main() {
  const prompt = process.argv[2];

  const { GIT_ASKPASS_USER, GIT_ASKPASS_PASSWORD } = process.env;
  if (!GIT_ASKPASS_USER || !GIT_ASKPASS_PASSWORD) {
    return -1;
  }

  const response = responseForPrompt(prompt, GIT_ASKPASS_USER, GIT_ASKPASS_PASSWORD);

  if (response) {
    process.stdout.write(response);
    process.stdout.end();
  }

  return 0;
}

process.exit(main());