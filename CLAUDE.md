# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a data-focused repository containing WRI (World Resources Institute) CRS-relevant data, applications, and tools documentation. The primary asset is an Excel spreadsheet with environmental and climate data.

## Working with the Data

### Primary Data File
- `For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx` - Microsoft Excel file containing WRI data catalog

### Data Analysis Setup

For Python-based data analysis:
```bash
# Install pandas and openpyxl for Excel file reading
pip install pandas openpyxl xlrd
```

For data exploration:
```python
import pandas as pd
df = pd.read_excel("For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx")
```

## Common Tasks

### Data Extraction and Analysis
- Use pandas for reading Excel sheets and performing data analysis
- Consider converting to CSV for easier version control if making modifications
- Use openpyxl for advanced Excel manipulations while preserving formatting

### Version Control Considerations
- Binary Excel files don't diff well in git
- Consider extracting key data to CSV or JSON for better version tracking
- Document any manual changes to the Excel file in commit messages

## Project Structure
```
data_navigator/
└── For Discussion - CRS Relevant Data, Applications, and Tools from WRI.xlsx
```