README.md

# Usage Instructions

This code helps assign a representative URI based on the initial letter of a last name.

## Steps to Use

1. **Define representatives**  
    Each representative is an object with:
    - `criteria`: (optional) a function that takes a character and returns `true` if it matches.
    - `URI`: a string representing the representative's URI.

    Example:
    ```javascript
    const repA_G = {
      criteria: selectionLogic("a", "g"),
      URI: "google.com",
    };
    const repNoCriteria = {
      URI: "bing.com",
    };
    const defaultRep = {
      URI: "default.com",
    };
    ```

2. **Create an array of representatives**
    ```javascript
    const reps = [repA_G, repNoCriteria];
    ```

3. **Assign a last name**
    Use `assignTo(lastName, reps, defaultRep)` to get the URI for a last name.
    
    ```javascript
    const assignedURI = assignTo("Anderson", reps, defaultRep);
    console.log(assignedURI); // "google.com"
    ```

    If no criteria match, the default representative will be assigned:
    ```javascript
    const assignedURI2 = assignTo("Zimmerman", reps, defaultRep);
    console.log(assignedURI2); // "bing.com"
    ```
