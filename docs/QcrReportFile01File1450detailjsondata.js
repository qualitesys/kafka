console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.BufferedOutputStream.java.html" 
 , "texte" : "File secujava/java.io.BufferedOutputStream.java 26 rule violations " 
 , "fic2"  : "./qc/secujava/java.io.BufferedOutputStream.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "FilterOutputStream"
 , "c2" : "java.io.BufferedOutputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.BufferedOutputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00058"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#58"
 , "c1" : "BufferedOutputStream"
 , "c2" : "BufferedOutputStream(OutputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#71"
 , "c1" : "BufferedOutputStream"
 , "c2" : "BufferedOutputStream(OutputStream;int)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#80"
 , "c1" : "void"
 , "c2" : "flushBuffer()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00093"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#93"
 , "c1" : "void"
 , "c2" : "write(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00116"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#116"
 , "c1" : "void"
 , "c2" : "write(byte[];int;int)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/secujava/java.io.BufferedOutputStream.java.html#139"
 , "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/secujava/java.io.BufferedOutputStream.java.png" 

 , "ligneplantuml" : "./qc/secujava/java.io.BufferedOutputStream.java.svg" }

] 
, 
"data04" : [
]
, 
"data05" : [
]
, 
"data06" : [
]
, 
"data07" : [
]
, 
"data08" : [
]
, 
"data09a" : [
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1450Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1450&numSeq=1"
 , "c2" : "1"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.count" , "java.io.BufferedOutputStream.count"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ok"
 , "secu2" : "Ok"
 , "secu3" : "Ok"
 , "secu4" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1450Seq2.html#seq2"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1450&numSeq=2"
 , "c2" : "2"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.buf" , "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ok"
 , "secu2" : "Ok"
 , "secu3" : "Ok"
 , "secu4" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "./QcrReportFile01File1450Seq3.html#seq3"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1450&numSeq=3"
 , "c2" : "3"
 , "c3" : "2"
 , "c4" : "2"
 , "c5" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.0" , "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122"]
 , "c6" : ""
 , "c7" : ""
 , "secu1" : "Ok"
 , "secu2" : "Ok"
 , "secu3" : "Ok"
 , "secu4" : "Ok"
}}
]
,
"data09b" : [
{ "sequence" : { 
 "seq" : "1" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00082]"
 , "c3" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.count" , "---java.io.BufferedOutputStream.write@POLYN161430" , "java.io.BufferedOutputStream.write@POLYN161430.len"]
 , "c4" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00129]"
 , "c3" : ["java.io.BufferedOutputStream.write@POLYN161430.len" , "---java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00129" , "java.io.BufferedOutputStream.count"]
 , "c4" : "//QC-JAVCWZ099[00129] In java.io.BufferedOutputStream.write@POLYN161430[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "5"
 , "seculibelle" : ""
 , "secuvaleur" : "Security risk level : CRITICAL"
}}
]
}}
,
{ "sequence" : { 
 "seq" : "2" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00082]"
 , "c3" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.buf" , "---java.io.BufferedOutputStream.write@POLYN161430" , "java.io.BufferedOutputStream.write@POLYN161430.b"]
 , "c4" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00122]"
 , "c3" : ["java.io.BufferedOutputStream.write@POLYN161430.b" , "---java.io.BufferedOutputStream.write@POLYN161430" , "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122"]
 , "c4" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "5"
 , "seculibelle" : ""
 , "secuvaleur" : "Security risk level : CRITICAL"
}}
]
}}
,
{ "sequence" : { 
 "seq" : "3" , "contenu" : [ 
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00082]"
 , "c3" : ["java.io.BufferedOutputStream.flushBuffer@POLYN160134.0" , "---java.io.BufferedOutputStream.write@POLYN161430" , "java.io.BufferedOutputStream.write@POLYN161430.off"]
 , "c4" : "//QC-JAVCWZ099[00082] In java.io.BufferedOutputStream.flushBuffer@POLYN160134[00082] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "1"
 , "sourcenoligne" : "[00122]"
 , "c3" : ["java.io.BufferedOutputStream.write@POLYN161430.off" , "---java.io.BufferedOutputStream.write@POLYN161430" , "java.io.BufferedOutputStream.write@POLYN161430.cibledummy_00122"]
 , "c4" : "//QC-JAVCWZ099[00122] In java.io.BufferedOutputStream.write@POLYN161430[00122] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "1"
 , "seculibelle" : " Secu1 (Si aucun input ou output : ok, si input seul : ok, si pas input et output : ok, si input et secure et ouput : input avant secure avant output alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "2"
 , "seculibelle" : " Secu2 ignore (Si au moins 1 input et output, toutes les variables inflow non constantes qui sont arg des methodes a risque output sont aussi arg des methodes secure alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "3"
 , "seculibelle" : " Secu3 ignore (Dataflow entre meth risk input et meth risk output est non disjoint alors Ok): "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "4"
 , "seculibelle" : " Synthese Secu4 (Synthese des 3 criteres : (non critere 3 et critere 1 et 2), ou (critere 3) alors Ok) : "
 , "secuvaleur" : "Ok"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "0"
 , "secuindice" : "5"
 , "seculibelle" : ""
 , "secuvaleur" : "Security risk level : CRITICAL"
}}
]
}}
]
, 
"data10" : [
]
, 
"data11" : [
]
, 
"data14" : [
]
, 
"data12a" : [
{ "ligne" :  "R0:java.io.BufferedOutputStream.this" }
,
{ "ligne" :  "R1:java.io.BufferedOutputStream.write@POLYN160569.b" }
,
{ "ligne" :  "R2:java.io.BufferedOutputStream.write@POLYN161430.b" }
,
{ "ligne" :  "R3:java.io.BufferedOutputStream.write@POLYN161430.off" }
,
{ "ligne" :  "R4:java.io.BufferedOutputStream.write@POLYN161430.len" }
]
,
"data12b" : [
{ "sequence" : { "noseq" : "0" , "pas" : [
{ "ligne" : "S0:java.io.BufferedOutputStream.write@POLYN160569 (R0 in line [00093],R1 in line [00093])" }
,
{ "ligne" : "S0:java.io.BufferedOutputStream.flushBuffer@POLYN160134" }
,
{ "ligne" : "S0:java.io.BufferedOutputStream.write@POLYN161430 (R0 in line [00116],R2 in line [00116],R3 in line [00116],R4 in line [00116])" }
,
{ "ligne" : "S0:java.io.BufferedOutputStream.write@POLYN161430 (R0 in line [00116],R2 in line [00116],R3 in line [00116],R4 in line [00116])" }
,
{ "ligne" : "S0:java.io.BufferedOutputStream.write@POLYN161430.dummymethode_00123" }
 ]
 } }
]
,
"data12c" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE833"
 , "c3" : "Potential deadlock between at least two ressources"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999995"
 , "c3" : "Recursivity with depth over 1 between method xx and method yy"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN159414 the MagicNumber/String  8192 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN159746 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN159746 the MagicNumber/String  'Buffer size &amp;lt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#93"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00093] Lock statement on synchronized method write"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#93"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00093] For method write arguments int  b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#116"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00116] Lock statement on synchronized method write"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#116"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00116] For method write arguments byte[]  b|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#139"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00139] Lock statement on synchronized method flush"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R0 : java.io.BufferedOutputStream.this"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R1 : java.io.BufferedOutputStream.write@POLYN160569.b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R2 : java.io.BufferedOutputStream.write@POLYN161430.b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R3 : java.io.BufferedOutputStream.write@POLYN161430.off"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE833[00001] Deadlock ressource definition of R4 : java.io.BufferedOutputStream.write@POLYN161430.len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method java.io.BufferedOutputStream.flushBuffer@POLYN160134 ending with method java.io.BufferedOutputStream.write@POLYN161430"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--java.io.BufferedOutputStream.flushBuffer@POLYN160134"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--java.io.BufferedOutputStream.write@POLYN161430"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for java.io.BufferedOutputStream.write@POLYN161430"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] Recursive call with depth 2 starting with method java.io.BufferedOutputStream.write@POLYN161430 ending with method java.io.BufferedOutputStream.flushBuffer@POLYN160134"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--java.io.BufferedOutputStream.write@POLYN161430"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#1"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999995[00001] +--+--java.io.BufferedOutputStream.flushBuffer@POLYN160134"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#81"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00081] In the recursive method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#82"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00082] In the recursive method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#83"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00083] In the recursive method java.io.BufferedOutputStream.flushBuffer@POLYN160134 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.BufferedOutputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
