import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Recipe, DetailedIngredient } from "@/data/recipes";

interface PrintRecipeProps {
  recipe: Recipe;
  servings: number;
  adjustedIngredients?: (DetailedIngredient & { adjustedAmount: number })[];
}

export const PrintRecipe = ({ recipe, servings, adjustedIngredients }: PrintRecipeProps) => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank');
    if (!printWindow) return;

    const hasDetailedIngredients = recipe.hasDetailedIngredients && adjustedIngredients;

    const ingredientsList = hasDetailedIngredients 
      ? adjustedIngredients!.map(ing => `${ing.adjustedAmount} ${ing.unit} ${ing.name}`).join('\n')
      : (recipe.ingredients as string[]).map(ing => `• ${ing}`).join('\n');

    const instructionsList = recipe.instructions.map((step, index) => 
      `${index + 1}. ${step}`
    ).join('\n\n');

    const printContent = `
      <!DOCTYPE html>
      <html lang="no">
      <head>
        <meta charset="UTF-8">
        <title>${recipe.title} - KokkeHjelpen</title>
        <style>
          @media print {
            body {
              font-family: Arial, sans-serif;
              max-width: 800px;
              margin: 0 auto;
              padding: 20px;
              color: #000;
            }
            h1 {
              color: #2c3e50;
              border-bottom: 3px solid #3b82f6;
              padding-bottom: 10px;
              margin-bottom: 20px;
            }
            h2 {
              color: #34495e;
              margin-top: 30px;
              margin-bottom: 15px;
            }
            .meta {
              display: flex;
              gap: 20px;
              margin-bottom: 20px;
              padding: 15px;
              background: #f8f9fa;
              border-radius: 8px;
            }
            .meta-item {
              display: flex;
              align-items: center;
              gap: 5px;
            }
            .section {
              margin-bottom: 30px;
            }
            .ingredients {
              line-height: 1.8;
              white-space: pre-line;
            }
            .instructions {
              line-height: 1.8;
              white-space: pre-line;
            }
            .tips {
              background: #fff9e6;
              border-left: 4px solid #ffc107;
              padding: 15px;
              margin-top: 20px;
            }
            .nutrition {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 10px;
              margin-top: 15px;
            }
            .nutrition-item {
              padding: 10px;
              background: #f8f9fa;
              border-radius: 5px;
            }
            .footer {
              margin-top: 40px;
              padding-top: 20px;
              border-top: 2px solid #e0e0e0;
              text-align: center;
              color: #666;
            }
            @page {
              margin: 2cm;
            }
          }
        </style>
      </head>
      <body>
        <h1>${recipe.title}</h1>
        
        <p><em>${recipe.description}</em></p>
        
        <div class="meta">
          <div class="meta-item">
            <strong>⏱️ Koketid:</strong> ${recipe.cookingTime}
          </div>
          <div class="meta-item">
            <strong>👥 Porsjoner:</strong> ${servings}
          </div>
          <div class="meta-item">
            <strong>⭐ Vanskelighetsgrad:</strong> ${recipe.difficulty}
          </div>
          <div class="meta-item">
            <strong>🏷️ Kategori:</strong> ${recipe.category}
          </div>
        </div>

        ${recipe.nutrition ? `
          <div class="section">
            <h2>Næringsinnhold (per porsjon)</h2>
            <div class="nutrition">
              <div class="nutrition-item">
                <strong>Kalorier:</strong> ${recipe.nutrition.calories} kcal
              </div>
              <div class="nutrition-item">
                <strong>Protein:</strong> ${recipe.nutrition.protein}g
              </div>
              <div class="nutrition-item">
                <strong>Karbohydrater:</strong> ${recipe.nutrition.carbs}g
              </div>
              <div class="nutrition-item">
                <strong>Fett:</strong> ${recipe.nutrition.fat}g
              </div>
            </div>
          </div>
        ` : ''}
        
        <div class="section">
          <h2>Ingredienser</h2>
          ${hasDetailedIngredients && servings !== recipe.servings ? 
            `<p><em>Mengdene er justert for ${servings} porsjoner</em></p>` : ''}
          <div class="ingredients">${ingredientsList}</div>
        </div>
        
        <div class="section">
          <h2>Fremgangsmåte</h2>
          <div class="instructions">${instructionsList}</div>
        </div>
        
        ${recipe.tips ? `
          <div class="tips">
            <strong>💡 Tips:</strong> ${recipe.tips}
          </div>
        ` : ''}
        
        <div class="footer">
          <p>Oppskrift fra KokkeHjelpen</p>
          <p><small>Utskrevet: ${new Date().toLocaleDateString('nb-NO')}</small></p>
        </div>
      </body>
      </html>
    `;

    printWindow.document.write(printContent);
    printWindow.document.close();
    
    // Wait for content to load before printing
    printWindow.onload = () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    };
  };

  return (
    <Button variant="outline" onClick={handlePrint}>
      <Printer className="w-4 h-4 mr-2" />
      Skriv ut oppskrift
    </Button>
  );
};
