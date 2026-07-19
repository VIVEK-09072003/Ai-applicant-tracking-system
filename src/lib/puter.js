const puter = window.puter;

if (!puter) {
  console.warn(
    "Puter SDK not found on window. Make sure the Puter script tag is present in index.html."
  );
}

export default puter;