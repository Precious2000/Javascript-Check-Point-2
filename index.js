function capitalizeWords(str) {
    return str.split("Hello world").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  console.log(capitalizeWords("hello world"));