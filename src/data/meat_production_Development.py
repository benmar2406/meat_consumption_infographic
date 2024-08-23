import pandas as pd
import matplotlib.pyplot as plt  # Verwende das korrekte Modul von matplotlib

# CSV-Datei einlesen
file_path = 'global-meat-production.csv' 
df = pd.read_csv(file_path)

# Den DataFrame anzeigen
print("Erste 5 Zeilen des ursprünglichen DataFrames:")
print(df.head())

# Nach dem Eintrag "Global" filtern
df_global = df[df['Entity'] == 'World']

# Gefilterten DataFrame anzeigen
print("\nGefilterte Daten für Global:")
print(df_global.head())

# Liniendiagramm erstellen
plt.figure(figsize=(10, 6))

plt.plot(df_global['Year'], df_global['Meat, total | 00001765 || Production | 005510 || tonnes'], label='Global')

plt.title('Global Meat Production Over Time')
plt.xlabel('Year')
plt.ylabel('Meat Production (tonnes)')
plt.legend(title='Region')
plt.grid(True)
plt.show()


