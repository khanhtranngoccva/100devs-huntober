// This version is slightly less robust than one in the 02.js.
/**
 * Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
 *
 * @example ```js
 * domainName("http://github.com/carbonfive/raygun"); // -> "github"
 * domainName("http://www.zombie-bites.com"); // -> "zombie-bites"
 * domainName("https://www.cnet.com"); // -> "cnet"
 * ```
 * @param {string} url The URL must have a schema followed by ://, a domain with name,
 * TLD and optional subdomain, and an optional path. No syntax errors allowed.
 * @returns {string} The final domain name, which is before the TLD (.com)
 */
function domainName(url) {
    // Remove all known schemas from the URL.
    return url
        .replace("http://", "").replaceAll("https://", "")
    // Remove the www subdomain.
        .replace("www.", "")
    // Split the rest of the domain into an array and select the 0th index of the data to get the domain name.
        .split(".")[0]
}

console.log(domainName("http://github.com/carbonfive/raygun")); // -> "github"
console.log(domainName("http://www.zombie-bites.com")); // -> "zombie-bites"
console.log(domainName("https://www.cnet.com")); // -> "cnet"