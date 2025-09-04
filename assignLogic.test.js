//const { describe, it, expect } = require("@jest/globals");
const { describe, it } = require("mocha");
const { expect } = require("chai");
const selectionLogic = require("./assignLogic.js").selectionLogic;
const { assignTo } = require("./assignLogic.js");

describe("selectionLogic", () => {
  it("returns true for a character within the range (lowercase)", () => {
    const isBetweenAandK = selectionLogic("a", "k");

    expect(isBetweenAandK("e")).to.be.true;
    expect(isBetweenAandK("k")).to.be.true;
  });

  it("returns false for a character outside the range (lowercase)", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK("l")).to.be.false;
    expect(isBetweenAandK("z")).to.be.false;
  });

  it("is case-insensitive", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK("A")).to.be.true;
    expect(isBetweenAandK("K")).to.be.true;
    expect(isBetweenAandK("L")).to.be.false;
  });

  it("works for different ranges", () => {
    const isBetweenMandP = selectionLogic("m", "p");
    expect(isBetweenMandP("m")).to.be.true;
    expect(isBetweenMandP("o")).to.be.true;
    expect(isBetweenMandP("p")).to.be.true;
    expect(isBetweenMandP("q")).to.be.false;
  });

  it("returns false for non-letter characters", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK("1")).to.be.false;
    expect(isBetweenAandK("-")).to.be.false;
  });

  it("returns false for empty string input", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK("")).to.be.false;
  });

  it("returns false for undefined input", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK(undefined)).to.be.false;
  });

  it("returns false for null input", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK(null)).to.be.false;
  });

  it("returns false for multi-character string", () => {
    const isBetweenAandK = selectionLogic("a", "k");
    expect(isBetweenAandK("ab")).to.be.false;
  });

  it("returns true for start and finish being the same character", () => {
    const isBetweenAandA = selectionLogic("a", "a");
    expect(isBetweenAandA("a")).to.be.true;
    expect(isBetweenAandA("A")).to.be.true;
    expect(isBetweenAandA("b")).to.be.false;
  });

  // Tests for assignTo
});

describe("assignTo", () => {
  const repA_G = {
    criteria: selectionLogic("a", "g"),
    URI: "google.com",
  };
  const repM_P = {
    criteria: selectionLogic("m", "p"),
    URI: "yahoo.com",
  };
  // Representative without criteria, used to test fallback/default assignment
  const repNoCriteria = {
    URI: "bing.com",
  };
  // Fallback representative used when no criteria match
  const defaultRep = {
    URI: "default.com",
  };

  it("assigns to correct rep based on initial letter (within a-g)", () => {
    expect(
      assignTo("alice", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("google.com");
    expect(
      assignTo("george", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("google.com");
  });

  it("assigns to correct rep based on initial letter (within m-p)", () => {
    expect(
      assignTo("mike", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("yahoo.com");
    expect(
      assignTo("paul", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("yahoo.com");
  });

  it("assigns to default rep if no criteria matches", () => {
    expect(
      assignTo("zane", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("default.com");
  });

  it("is case-insensitive for initial letter", () => {
    expect(
      assignTo("Alice", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("google.com");
    expect(
      assignTo("MIKE", [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("yahoo.com");
  });

  it("returns default URI if reps array is empty", () => {
    expect(assignTo("alice", [], defaultRep)).to.equal("default.com");
  });

  it("returns default URI if reps have no criteria", () => {
    expect(assignTo("alice", [repNoCriteria], defaultRep)).to.equal(
      "default.com"
    );
  });

  it("returns default URI if lastName is empty string", () => {
    expect(assignTo("", [repA_G, repM_P, repNoCriteria], defaultRep)).to.equal(
      "default.com"
    );
  });

  it("returns default URI if lastName is undefined", () => {
    expect(
      assignTo(undefined, [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("default.com");
  });

  it("returns default URI if lastName is null", () => {
    expect(
      assignTo(null, [repA_G, repM_P, repNoCriteria], defaultRep)
    ).to.equal("default.com");
  });
});
