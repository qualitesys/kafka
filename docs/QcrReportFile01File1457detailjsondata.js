console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.InputStream.java.html" 
 , "texte" : "File secujava/java.io.InputStream.java 35 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "Closeable"
 , "c2" : "java.io.InputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.InputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#66"
 , "c1" : "int"
 , "c2" : "read()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00101"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#101"
 , "c1" : "int"
 , "c2" : "read(byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00162"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#162"
 , "c1" : "int"
 , "c2" : "read(byte[];int;int)"
 , "c3" : "9"
 , "c4" : "13"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00211"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#211"
 , "c1" : "long"
 , "c2" : "skip(long)"
 , "c3" : "5"
 , "c4" : "9"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00262"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#262"
 , "c1" : "int"
 , "c2" : "available()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00275"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#275"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00303"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#303"
 , "c1" : "void"
 , "c2" : "mark(int)"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00350"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#350"
 , "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00366"
 , "c5link" : "././qc/secujava/java.io.InputStream.java.html#366"
 , "c1" : "boolean"
 , "c2" : "markSupported()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/secujava/java.io.InputStream.java.svg" }

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
 , "c1" : "./QcrReportFile01File1457Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1457&numSeq=1"
 , "c2" : "1"
 , "c3" : "4"
 , "c4" : "3"
 , "c5" : ["1" , "java.io.InputStream.skip@POLYN259584.remaining"]
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
 , "sourcenoligne" : "[00177]"
 , "c3" : ["1" , "---java.io.InputStream.read@POLYN257278.dummymethode_00177" , "java.io.InputStream.read@POLYN257278.i"]
 , "c4" : "//QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN257278[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00188]"
 , "c3" : ["java.io.InputStream.read@POLYN257278.i" , "---java.io.InputStream.read@POLYN257278.dummymethode_00188" , "java.io.InputStream.read@POLYN257278.return"]
 , "c4" : "//QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN257278[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "3"
 , "sourcenoligne" : "[00225]"
 , "c3" : ["java.io.InputStream.read@POLYN257278.return" , "---java.io.InputStream.read@POLYN257278" , "java.io.InputStream.skip@POLYN259584.nr"]
 , "c4" : "//QC-JAVCWE099[00225] In java.io.InputStream.skip@POLYN259584[00225] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "4"
 , "sourcenoligne" : "[00230]"
 , "c3" : ["java.io.InputStream.skip@POLYN259584.nr" , "---java.io.InputStream.skip@POLYN259584.dummymethode_00230" , "java.io.InputStream.skip@POLYN259584.remaining"]
 , "c4" : ""
 , "c5" : "none"
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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000005"
 , "c3" : "Empty method"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "19"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#101"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00101] For method read arguments byte[]  b"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method java.io.InputStream.read@POLYN254119 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00162] For method read arguments byte[]  b|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00162"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#162"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00162] For method read list of called methods Object monObjet|int readN257926"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00186] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00165"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#165"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00165] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00167"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#167"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00167] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00168"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00172"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#172"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00172] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method java.io.InputStream.read@POLYN257278 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00211] For method skip arguments long  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00211"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#211"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00211] For method skip list of called methods Object monObjet|int readN260175"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00220"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#220"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00220] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00221"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#221"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00221] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00224"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#224"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00224] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#225"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00225] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00227"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#227"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00227] In method java.io.InputStream.skip@POLYN259584 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00263"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#263"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00263] In method java.io.InputStream.available@POLYN261466 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#303"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00303] Lock statement on synchronized method mark"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#303"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00303] For method mark arguments int  readlimit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00350"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#350"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00350] Lock statement on synchronized method reset"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00351"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#351"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00351] In method java.io.InputStream.reset@POLYN264588 the MagicNumber/String  'mark/reset not supported' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00367"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method java.io.InputStream.markSupported@POLYN265216 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00275] Void method close is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00275"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#275"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00275] Void method close is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000005[00303] Void method mark is empty or contains only a return."
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00303"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#303"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00303] Void method mark is empty or contains only a return. Interface segregation"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00225"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#225"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE099[00225] In java.io.InputStream.skip@POLYN259584[00225] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00188"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#188"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE099[00188] In java.io.InputStream.read@POLYN257278[00188] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/secujava/java.io.InputStream.java.html#177"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVCWE099[00177] In java.io.InputStream.read@POLYN257278[00177] source data PATHtainted (java.io.InputStream.read) RiskOnInput"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.InputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
