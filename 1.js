/* 
==============
Bilangan Prima
==============

Bilangan prima merupakan bilangan yang hanya habis dibagi oleh angka 1 dan angka itu sendiri.
Buat algoritma DAN pseudocode untuk mengecek apakah sebuah angka merupakan angka prima atau bukan.
 */

// Tulis algoritma di sini

1. Simpan 'angka' dengan nilai apapun
2. Jika 'angka' lebih kecil atau sama dengan 1 maka angka bukan prima
3. Jika 'angka' dibagi 2 dan remainder tidak sama dengan 0 maka angka bukan prima
4. Jika 'angka' dibagi 3 dan remainder tidak sama dengan 0 maka angka bukan prima
5. Jika 'angka' dibagi 5 dan remainder tidak sama dengan 0 maka angka bukan prima
6. Jika 'angka' dibagi 7 dan remainder tidak sama dengan 0 maka angka bukan prima
7. Jika 'angka' dibagi 11 dan remainder tidak sama dengan 0 maka angka bukan prima
8. Jika 'angka' dibagi 13 dan remainder tidak sama dengan 0 maka angka bukan prima
9. Jika 'angka' dibagi 17 dan remainder tidak sama dengan 0 maka angka bukan prima
10. Jika 'angka' dibagi 19 dan remainder tidak sama dengan 0 maka angka bukan prima
11. Jika tidak, maka angka adalah prima

// Tulis pseudocode di sini

STORE 'angka' AS any Number
IF 'angka' SMALLER THAN OR EQUALS TO 1 DISPLAY 'False'
IF 'angka' MODULUS 2 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 3 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 5 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 7 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 11 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 13 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 17 NOT EQUALS TO 0 DISPLAY 'False'
IF 'angka' MODULUS 19 NOT EQUALS TO 0 DISPLAY 'False'
ELSE DISPLAY 'True'
ENDIF