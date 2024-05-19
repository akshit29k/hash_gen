export default async function HashGenFunc(key, msg) {
    try {
      const keyBuffer = hexStringToUint8Array(key);
      const msgBuffer = new TextEncoder().encode(msg);
  
      const importedKey = await window.crypto.subtle.importKey(
        "raw",
        keyBuffer,
        { name: "HMAC", hash: { name: "SHA-256" } },
        false,
        ["sign"]
      );
  
      const hashBuffer = await window.crypto.subtle.sign(
        "HMAC",
        importedKey,
        msgBuffer
      );
  
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');
      return hashHex.toUpperCase();;
    } catch (ex) {
      console.error(`Error generating signature: ${ex.message}`);
      return null;
    }
  }
  
  // Helper function to convert hexadecimal string to Uint8Array
  function hexStringToUint8Array(hexString) {
    const bytes = [];
    for (let i = 0; i < hexString.length; i += 2) {
      bytes.push(parseInt(hexString.substr(i, 2), 16));
    }
    return new Uint8Array(bytes);
  }
  