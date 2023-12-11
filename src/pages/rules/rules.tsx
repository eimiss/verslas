import React from "react";

const RulesPage = () => {
  const rules = "Žaidėjai analizuoja klausimus ir bando kuo teisingiau atsakyti į klausimus, kiekvienas iš duotų atsakymų turi skirtingą balų skaičių, teisingas atsakymas vertas daugiausiai balų. Už neteisingus atsakymus balai nėra atimami, tiesiog pridedama jų vertė prie galutinio varianto (gali būti ir nulis).";
  const zaidejot = "Surinkti kuo didesnį taškų skaičių.";
  const zaidimot = "Gilinti skaitmeninio verslo žinias ir suteikti žaidėjams verslumo įgūdžių.";
  const howToPlay = "Nežaisti";
  return (
    <div style={styles.root}>
      <h1 style={styles.title}>Žaidimo tikslas</h1>
      <div style={styles.rulesContainer}>
        <div style={styles.rules}>{zaidimot}</div>
      </div>

      <h1 style={styles.title}>Žaidėjo tikslas</h1>
      <div style={styles.rulesContainer}>
        <div style={styles.rules}>{zaidejot}</div>
      </div>
      
      <h1 style={styles.title}>Taisyklės</h1>
      <div style={styles.rulesContainer}>
        <div style={styles.rules}>{rules}</div>
      </div>

      <h1 style={styles.title}>Kaip žaisti?</h1>
      <div style={styles.rulesContainer}>
        <div style={styles.rules}>{howToPlay}</div>
      </div>
    </div>
  );
};
export default RulesPage;

const styles = {
  root: { padding: "20px 40px" },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
  },
  rulesContainer: {
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
  },
  rules: {
    fontSize: "16px",
    lineHeight: "1.5",
    color: "#333",
  },
};
