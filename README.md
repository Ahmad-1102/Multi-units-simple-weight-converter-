Weight Converter

A web-based weight converter supporting 20 different weight units from around the world, including metric, imperial, and traditional regional measurements.

Features
-Convert between 20 different weight units
-Dropdown menus prevent input errors
-Two-step conversion through kilogram as base unit
-Clean green-themed interface
-Event listener implementation (no inline JavaScript)
-Handles same-unit conversions efficiently

Supported Units

Metric System:
Kilogram (KG), Gram (G), Milligram (MG), Decigram (DG), Centigram (CG), Microgram (MIC-G), Tonne (T)
Imperial System:
Pound (LB), Ounce (OZ), Stone (STONE), Grain (GR), Dram (DRAM), Troy Ounce (T-OZ), Short Tonne (SH-T), Long Tonne (LO-T)
Traditional Units:
Jin (JIN), Tael (TAEL), Mithqal (MITHQAL), Arabic Pound (AR-LB), Maund (MAUND)

Installation

-Clone the repository
-git clone https://github.com/Ahmad-1102/weight-converter.git
-Navigate to project directory
-cd weight-converter
-Open index.html in your browser

Usage

1.Select the unit you're converting FROM in the first dropdown
2.Select the unit you're converting TO in the second dropdown
3.Enter the weight value
4.Click Convert
5.Result displays with the target unit

How It Works

The converter uses kilogram as an intermediate unit for all conversions. When converting between non-kilogram units, the conversion happens in two steps: first to kilogram, then to the target unit. This approach reduces the number of conversion formulas needed from 400+ direct conversions to approximately 40 formulas total.


Technologies

-HTML5 for structure
-CSS3 with Flexbox for responsive layout
-Vanilla JavaScript for conversion logic
-Event listeners for proper separation of concerns


File Structure

weight-converter/

-├── index.html      -# Main HTML structure
-├── styles.css      -# Styling and layout
-└── script.js       -# Conversion logic and event handling

Project Status

Learning project demonstrating use of JavaScript objects, dropdown menus, and mathematical conversions. Functional and handles all listed unit conversions correctly.

License:
MIT
Author:
Ahmad
GitHub: @Ahmad-1102
