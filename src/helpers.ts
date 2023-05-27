function generateRandomHandle(): string {
  const handleLength = Math.floor(Math.random() * 5) + 5; // Generate handle length between 5 and 9 characters
  let handle = '';
  for (let i = 0; i < handleLength; i++) {
    const randomCharCode = Math.floor(Math.random() * 26) + 97; // Generate random lowercase letter ASCII code
    const randomChar = String.fromCharCode(randomCharCode);
    handle += randomChar;
  }
  return handle;
}

export function generateRandomHandles(): string[] {
  const handleCount = Math.floor(Math.random() * 5) + 5; // Generate between 5 and 9 handles
  const handles = [];
  for (let i = 0; i < handleCount; i++) {
    const handle = generateRandomHandle();
    handles.push(handle);
  }
  return handles;
}
