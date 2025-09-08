import json
import sys

try:
    import pandas as pd
except ImportError:
    print("pandas not installed, trying with csv module")
    sys.exit(1)

# Read the Excel file
file_path = "For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx"

try:
    # Read all sheets
    excel_file = pd.ExcelFile(file_path)
    print(f"Sheet names: {excel_file.sheet_names}")
    
    # Read the first sheet
    df = pd.read_excel(file_path, sheet_name=0)
    
    print(f"\nShape: {df.shape}")
    print(f"\nColumns: {list(df.columns)}")
    print(f"\nFirst 5 rows:")
    print(df.head())
    
    # Convert to JSON for web use
    data = df.to_dict('records')
    
    # Clean up NaN values
    import math
    for record in data:
        for key, value in record.items():
            if isinstance(value, float) and math.isnan(value):
                record[key] = None
    
    # Save as JSON
    with open('datasets.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, indent=2, ensure_ascii=False)
    
    print(f"\nConverted {len(data)} records to datasets.json")
    
except Exception as e:
    print(f"Error: {e}")