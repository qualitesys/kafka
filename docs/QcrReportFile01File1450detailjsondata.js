console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.BufferedOutputStream.java.html" 
 , "texte" : "File secujava/java.io.BufferedOutputStream.java 13 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "FilterOutputStream"
 , "c2" : ""
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
   {

 "ligneplantuml" : "./qc/secujava/java.io.BufferedOutputStream.java.svg" }

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
 , "c5" : ["java.io.BufferedOutputStream.write@POLYN171864.count" , "java.io.BufferedOutputStream.write@POLYN171864.count"]
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
 , "c1" : "1"
 , "sourcenoligne" : "[00128]"
 , "c3" : ["java.io.BufferedOutputStream.write@POLYN171864.count" , "---java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00128" , "java.io.BufferedOutputStream.write@POLYN171864.cibledummy_00128"]
 , "c4" : "//QC-JAVCWE099[00128] In java.io.BufferedOutputStream.write@POLYN171864[00128] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
 , "c5" : "output"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00129]"
 , "c3" : ["len" , "---java.io.BufferedOutputStream.write@POLYN171864.dummymethode_00129" , "java.io.BufferedOutputStream.write@POLYN171864.count"]
 , "c4" : "//QC-JAVCWE099[00129] In java.io.BufferedOutputStream.write@POLYN171864[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
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
]
}}
]
, 
"data10" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVCWE099"
 , "c3" : "Ressource injection"
 , "c4" : "2"
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
 , "c3" : "QC-JAV000010[00059] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN169848 the MagicNumber/String  8192 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN170180 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method java.io.BufferedOutputStream.BufferedOutputStream@POLYN170180 the MagicNumber/String  'Buffer size &amp;lt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method java.io.BufferedOutputStream.flushBuffer@POLYN170568 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method java.io.BufferedOutputStream.flushBuffer@POLYN170568 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00083"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method java.io.BufferedOutputStream.flushBuffer@POLYN170568 the MagicNumber/String  0 should be converted to const"
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
 , "c1" : "00129"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#129"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE099[00129] In java.io.BufferedOutputStream.write@POLYN171864[00129] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/secujava/java.io.BufferedOutputStream.java.html#128"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE099[00128] In java.io.BufferedOutputStream.write@POLYN171864[00128] target data PATHtainted (java.io.BufferedOutputStream.write) RiskOnOutput"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.BufferedOutputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
