
var OPS_6502 = [
  {mn:"BRK",am:"",nb:1,il:0,c1:7,c2:0}, // 00
  {mn:"ORA",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // 01
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 02
  {mn:"SLO",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // 03
  {mn:"NOP",am:"aa",nb:2,il:1,c1:3,c2:0}, // 04
  {mn:"ORA",am:"aa",nb:2,il:0,c1:3,c2:0}, // 05
  {mn:"ASL",am:"aa",nb:2,il:0,c1:5,c2:0}, // 06
  {mn:"SLO",am:"aa",nb:2,il:1,c1:5,c2:0}, // 07
  {mn:"PHP",am:"",nb:1,il:0,c1:3,c2:0}, // 08
  {mn:"ORA",am:"#aa",nb:2,il:0,c1:2,c2:0}, // 09
  {mn:"ASL",am:"",nb:1,il:0,c1:2,c2:0}, // 0A
  {mn:"ANC",am:"#aa",nb:2,il:1,c1:2,c2:0}, // 0B
  {mn:"NOP",am:"AAAA",nb:3,il:1,c1:4,c2:0}, // 0C
  {mn:"ORA",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 0D
  {mn:"ASL",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // 0E
  {mn:"SLO",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // 0F
  {mn:"BPL",am:"branch",nb:2,il:0,c1:2,c2:2}, // 10
  {mn:"ORA",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // 11
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 12
  {mn:"SLO",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // 13
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // 14
  {mn:"ORA",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 15
  {mn:"ASL",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // 16
  {mn:"SLO",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // 17
  {mn:"CLC",am:"",nb:1,il:0,c1:2,c2:0}, // 18
  {mn:"ORA",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // 19
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // 1A
  {mn:"SLO",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // 1B
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // 1C
  {mn:"ORA",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // 1D
  {mn:"ASL",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // 1E
  {mn:"SLO",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // 1F
  {mn:"JSR",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // 20
  {mn:"AND",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // 21
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 22
  {mn:"RLA",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // 23
  {mn:"BIT",am:"aa",nb:2,il:0,c1:3,c2:0}, // 24
  {mn:"AND",am:"aa",nb:2,il:0,c1:3,c2:0}, // 25
  {mn:"ROL",am:"aa",nb:2,il:0,c1:5,c2:0}, // 26
  {mn:"RLA",am:"aa",nb:2,il:1,c1:5,c2:0}, // 27
  {mn:"PLP",am:"",nb:1,il:0,c1:4,c2:0}, // 28
  {mn:"AND",am:"#aa",nb:2,il:0,c1:2,c2:0}, // 29
  {mn:"ROL",am:"",nb:1,il:0,c1:2,c2:0}, // 2A
  {mn:"ANC",am:"#aa",nb:2,il:1,c1:2,c2:0}, // 2B
  {mn:"BIT",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 2C
  {mn:"AND",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 2D
  {mn:"ROL",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // 2E
  {mn:"RLA",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // 2F
  {mn:"BMI",am:"branch",nb:2,il:0,c1:2,c2:2}, // 30
  {mn:"AND",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // 31
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 32
  {mn:"RLA",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // 33
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // 34
  {mn:"AND",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 35
  {mn:"ROL",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // 36
  {mn:"RLA",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // 37
  {mn:"SEC",am:"",nb:1,il:0,c1:2,c2:0}, // 38
  {mn:"AND",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // 39
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // 3A
  {mn:"RLA",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // 3B
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // 3C
  {mn:"AND",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // 3D
  {mn:"ROL",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // 3E
  {mn:"RLA",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // 3F
  {mn:"RTI",am:"",nb:1,il:0,c1:6,c2:0}, // 40
  {mn:"EOR",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // 41
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 42
  {mn:"SRE",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // 43
  {mn:"NOP",am:"aa",nb:2,il:1,c1:3,c2:0}, // 44
  {mn:"EOR",am:"aa",nb:2,il:0,c1:3,c2:0}, // 45
  {mn:"LSR",am:"aa",nb:2,il:0,c1:5,c2:0}, // 46
  {mn:"SRE",am:"aa",nb:2,il:1,c1:5,c2:0}, // 47
  {mn:"PHA",am:"",nb:1,il:0,c1:3,c2:0}, // 48
  {mn:"EOR",am:"#aa",nb:2,il:0,c1:2,c2:0}, // 49
  {mn:"LSR",am:"",nb:1,il:0,c1:2,c2:0}, // 4A
  {mn:"ASR",am:"#aa",nb:2,il:1,c1:2,c2:0}, // 4B
  {mn:"JMP",am:"AAAA",nb:3,il:0,c1:3,c2:0}, // 4C
  {mn:"EOR",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 4D
  {mn:"LSR",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // 4E
  {mn:"SRE",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // 4F
  {mn:"BVC",am:"branch",nb:2,il:0,c1:2,c2:2}, // 50
  {mn:"EOR",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // 51
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 52
  {mn:"SRE",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // 53
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // 54
  {mn:"EOR",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 55
  {mn:"LSR",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // 56
  {mn:"SRE",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // 57
  {mn:"CLI",am:"",nb:1,il:0,c1:2,c2:0}, // 58
  {mn:"EOR",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // 59
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // 5A
  {mn:"SRE",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // 5B
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // 5C
  {mn:"EOR",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // 5D
  {mn:"LSR",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // 5E
  {mn:"SRE",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // 5F
  {mn:"RTS",am:"",nb:1,il:0,c1:6,c2:0}, // 60
  {mn:"ADC",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // 61
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 62
  {mn:"RRA",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // 63
  {mn:"NOP",am:"aa",nb:2,il:1,c1:3,c2:0}, // 64
  {mn:"ADC",am:"aa",nb:2,il:0,c1:3,c2:0}, // 65
  {mn:"ROR",am:"aa",nb:2,il:0,c1:5,c2:0}, // 66
  {mn:"RRA",am:"aa",nb:2,il:1,c1:5,c2:0}, // 67
  {mn:"PLA",am:"",nb:1,il:0,c1:4,c2:0}, // 68
  {mn:"ADC",am:"#aa",nb:2,il:0,c1:2,c2:0}, // 69
  {mn:"ROR",am:"",nb:1,il:0,c1:2,c2:0}, // 6A
  {mn:"ARR",am:"#aa",nb:2,il:1,c1:2,c2:0}, // 6B
  {mn:"JMP",am:"(AAAA)",nb:3,il:0,c1:5,c2:0}, // 6C
  {mn:"ADC",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 6D
  {mn:"ROR",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // 6E
  {mn:"RRA",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // 6F
  {mn:"BVS",am:"branch",nb:2,il:0,c1:2,c2:2}, // 70
  {mn:"ADC",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // 71
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 72
  {mn:"RRA",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // 73
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // 74
  {mn:"ADC",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 75
  {mn:"ROR",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // 76
  {mn:"RRA",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // 77
  {mn:"SEI",am:"",nb:1,il:0,c1:2,c2:0}, // 78
  {mn:"ADC",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // 79
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // 7A
  {mn:"RRA",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // 7B
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // 7C
  {mn:"ADC",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // 7D
  {mn:"ROR",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // 7E
  {mn:"RRA",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // 7F
  {mn:"NOP",am:"#aa",nb:2,il:1,c1:0,c2:0}, // 80
  {mn:"STA",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // 81
  {mn:"NOP",am:"#aa",nb:2,il:1,c1:0,c2:0}, // 82
  {mn:"SAX",am:"(aa,x)",nb:2,il:1,c1:6,c2:1}, // 83
  {mn:"STY",am:"aa",nb:2,il:0,c1:3,c2:0}, // 84
  {mn:"STA",am:"aa",nb:2,il:0,c1:3,c2:0}, // 85
  {mn:"STX",am:"aa",nb:2,il:0,c1:3,c2:0}, // 86
  {mn:"SAX",am:"aa",nb:2,il:1,c1:3,c2:0}, // 87
  {mn:"DEY",am:"",nb:1,il:0,c1:2,c2:0}, // 88
  {mn:"NOP",am:"#aa",nb:2,il:1,c1:0,c2:0}, // 89
  {mn:"TXA",am:"",nb:1,il:0,c1:2,c2:0}, // 8A
  {mn:"ANE",am:"#aa",nb:2,il:1,c1:0,c2:0}, // 8B
  {mn:"STY",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 8C
  {mn:"STA",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 8D
  {mn:"STX",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // 8E
  {mn:"SAX",am:"AAAA",nb:3,il:1,c1:4,c2:0}, // 8F
  {mn:"BCC",am:"branch",nb:2,il:0,c1:2,c2:2}, // 90
  {mn:"STA",am:"(aa),y",nb:2,il:0,c1:6,c2:0}, // 91
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // 92
  {mn:"SHA",am:"(aa),y",nb:2,il:1,c1:0,c2:0}, // 93
  {mn:"STY",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 94
  {mn:"STA",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // 95
  {mn:"STX",am:"aa,y",nb:2,il:0,c1:4,c2:0}, // 96
  {mn:"SAX",am:"aa,y",nb:3,il:1,c1:4,c2:1}, // 97
  {mn:"TYA",am:"",nb:1,il:0,c1:2,c2:0}, // 98
  {mn:"STA",am:"AAAA,y",nb:3,il:0,c1:5,c2:0}, // 99
  {mn:"TXS",am:"",nb:1,il:0,c1:2,c2:0}, // 9A
  {mn:"SHS",am:"AAAA,y",nb:3,il:1,c1:0,c2:0}, // 9B
  {mn:"SHY",am:"AAAA,x",nb:3,il:1,c1:0,c2:0}, // 9C
  {mn:"STA",am:"AAAA,x",nb:3,il:0,c1:5,c2:0}, // 9D
  {mn:"SHX",am:"AAAA,y",nb:3,il:1,c1:0,c2:0}, // 9E
  {mn:"SHA",am:"AAAA,y",nb:3,il:1,c1:0,c2:0}, // 9F
  {mn:"LDY",am:"#aa",nb:2,il:0,c1:2,c2:0}, // A0
  {mn:"LDA",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // A1
  {mn:"LDX",am:"#aa",nb:2,il:0,c1:2,c2:0}, // A2
  {mn:"LAX",am:"(aa,x)",nb:2,il:1,c1:6,c2:1}, // A3
  {mn:"LDY",am:"aa",nb:2,il:0,c1:3,c2:0}, // A4
  {mn:"LDA",am:"aa",nb:2,il:0,c1:3,c2:0}, // A5
  {mn:"LDX",am:"aa",nb:2,il:0,c1:3,c2:0}, // A6
  {mn:"LAX",am:"aa",nb:2,il:1,c1:3,c2:0}, // A7
  {mn:"TAY",am:"",nb:1,il:0,c1:2,c2:0}, // A8
  {mn:"LDA",am:"#aa",nb:2,il:0,c1:2,c2:0}, // A9
  {mn:"TAX",am:"",nb:1,il:0,c1:2,c2:0}, // AA
  {mn:"LXA",am:"#aa",nb:2,il:1,c1:0,c2:0}, // AB
  {mn:"LDY",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // AC
  {mn:"LDA",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // AD
  {mn:"LDX",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // AE
  {mn:"LAX",am:"AAAA",nb:3,il:1,c1:4,c2:0}, // AF
  {mn:"BCS",am:"branch",nb:2,il:0,c1:2,c2:2}, // B0
  {mn:"LDA",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // B1
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // B2
  {mn:"LAX",am:"(aa),y",nb:2,il:1,c1:5,c2:1}, // B3
  {mn:"LDY",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // B4
  {mn:"LDA",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // B5
  {mn:"LDX",am:"aa,y",nb:2,il:0,c1:4,c2:0}, // B6
  {mn:"LAX",am:"aa,y",nb:2,il:1,c1:4,c2:1}, // B7
  {mn:"CLV",am:"",nb:1,il:0,c1:2,c2:0}, // B8
  {mn:"LDA",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // B9
  {mn:"TSX",am:"",nb:1,il:0,c1:2,c2:0}, // BA
  {mn:"LAS",am:"AAAA,y",nb:3,il:1,c1:0,c2:0}, // BB
  {mn:"LDY",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // BC
  {mn:"LDA",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // BD
  {mn:"LDX",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // BE
  {mn:"LAX",am:"AAAA,y",nb:3,il:1,c1:4,c2:1}, // BF
  {mn:"CPY",am:"#aa",nb:2,il:0,c1:2,c2:0}, // C0
  {mn:"CMP",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // C1
  {mn:"NOP",am:"#aa",nb:2,il:1,c1:0,c2:0}, // C2
  {mn:"DCP",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // C3
  {mn:"CPY",am:"aa",nb:2,il:0,c1:3,c2:0}, // C4
  {mn:"CMP",am:"aa",nb:2,il:0,c1:3,c2:0}, // C5
  {mn:"DEC",am:"aa",nb:2,il:0,c1:5,c2:0}, // C6
  {mn:"DCP",am:"aa",nb:2,il:1,c1:5,c2:0}, // C7
  {mn:"INY",am:"",nb:1,il:0,c1:2,c2:0}, // C8
  {mn:"CMP",am:"#aa",nb:2,il:0,c1:2,c2:0}, // C9
  {mn:"DEX",am:"",nb:1,il:0,c1:2,c2:0}, // CA
  {mn:"SBX",am:"#aa",nb:2,il:1,c1:2,c2:0}, // CB
  {mn:"CPY",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // CC
  {mn:"CMP",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // CD
  {mn:"DEC",am:"AAAA",nb:3,il:0,c1:3,c2:0}, // CE
  {mn:"DCP",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // CF
  {mn:"BNE",am:"branch",nb:2,il:0,c1:2,c2:2}, // D0
  {mn:"CMP",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // D1
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // D2
  {mn:"DCP",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // D3
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // D4
  {mn:"CMP",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // D5
  {mn:"DEC",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // D6
  {mn:"DCP",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // D7
  {mn:"CLD",am:"",nb:1,il:0,c1:2,c2:0}, // D8
  {mn:"CMP",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // D9
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // DA
  {mn:"DCP",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // DB
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // DC
  {mn:"CMP",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // DD
  {mn:"DEC",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // DE
  {mn:"DCP",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // DF
  {mn:"CPX",am:"#aa",nb:2,il:0,c1:2,c2:0}, // E0
  {mn:"SBC",am:"(aa,x)",nb:2,il:0,c1:6,c2:0}, // E1
  {mn:"NOP",am:"#aa",nb:2,il:1,c1:0,c2:0}, // E2
  {mn:"ISB",am:"(aa,x)",nb:2,il:1,c1:8,c2:1}, // E3
  {mn:"CPX",am:"aa",nb:2,il:0,c1:3,c2:0}, // E4
  {mn:"SBC",am:"aa",nb:2,il:0,c1:3,c2:0}, // E5
  {mn:"INC",am:"aa",nb:2,il:0,c1:5,c2:0}, // E6
  {mn:"ISB",am:"aa",nb:2,il:1,c1:5,c2:0}, // E7
  {mn:"INX",am:"",nb:1,il:0,c1:2,c2:0}, // E8
  {mn:"SBC",am:"#aa",nb:2,il:0,c1:2,c2:0}, // E9
  {mn:"NOP",am:"",nb:1,il:0,c1:2,c2:0}, // EA
  {mn:"SBC",am:"#aa",nb:2,il:1,c1:0,c2:0}, // EB
  {mn:"CPX",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // EC
  {mn:"SBC",am:"AAAA",nb:3,il:0,c1:4,c2:0}, // ED
  {mn:"INC",am:"AAAA",nb:3,il:0,c1:6,c2:0}, // EE
  {mn:"ISB",am:"AAAA",nb:3,il:1,c1:6,c2:0}, // EF
  {mn:"BEQ",am:"branch",nb:2,il:0,c1:2,c2:2}, // F0
  {mn:"SBC",am:"(aa),y",nb:2,il:0,c1:5,c2:1}, // F1
  {mn:"KIL",am:"",nb:1,il:1,c1:0,c2:0}, // F2
  {mn:"ISB",am:"(aa),y",nb:2,il:1,c1:8,c2:1}, // F3
  {mn:"NOP",am:"aa,x",nb:2,il:1,c1:4,c2:0}, // F4
  {mn:"SBC",am:"aa,x",nb:2,il:0,c1:4,c2:0}, // F5
  {mn:"INC",am:"aa,x",nb:2,il:0,c1:6,c2:0}, // F6
  {mn:"ISB",am:"aa,x",nb:2,il:1,c1:6,c2:1}, // F7
  {mn:"SED",am:"",nb:1,il:0,c1:2,c2:0}, // F8
  {mn:"SBC",am:"AAAA,y",nb:3,il:0,c1:4,c2:1}, // F9
  {mn:"NOP",am:"",nb:1,il:1,c1:0,c2:0}, // FA
  {mn:"ISB",am:"AAAA,y",nb:3,il:1,c1:7,c2:1}, // FB
  {mn:"NOP",am:"AAAA,x",nb:3,il:1,c1:4,c2:1}, // FC
  {mn:"SBC",am:"AAAA,x",nb:3,il:0,c1:4,c2:1}, // FD
  {mn:"INC",am:"AAAA,x",nb:3,il:0,c1:7,c2:0}, // FE
  {mn:"ISB",am:"AAAA,x",nb:3,il:1,c1:7,c2:1}, // FF
];

function disassemble6502(pc, b0, b1, b2) {

  function formatHex(number, len) {
    if (typeof number === "undefined" || number === null || isNaN(number)) {
      throw new Error("Invalid value \"" + number + "\" passed to formatHex()");
    }
    var str = number.toString(16).toUpperCase();
    if (!len) {
      if (str.length % 2 == 1) {
        len = str.length+1;
      }
    }
    while (str.length < len) {
      str = "0" + str;
    }
    return str;
  }


  var op = OPS_6502[b0];
  var s = op.mn;
  var am = op.am;
  if (am == 'branch') {
    var offset = (b1 < 0x80) ? (pc+2+b1) : (pc+2-(256-b1));
    offset &= 0xffff;
    am = '$'+formatHex(offset, 4);
  } else {
    am = am.replace('aa','$'+formatHex(b1, 2));
    am = am.replace('AAAA','$'+formatHex(b1+(b2<<8), 4));
  }
  return {line:op.mn + " " + am, nbytes:op.nb};
};
