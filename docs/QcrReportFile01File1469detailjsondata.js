console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.Reader.java.html" 
 , "texte" : "File secujava/java.io.Reader.java 28 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Readable"
 , "c2" : "java.io.Reader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.Reader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00066"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#66"
 , "c1" : "Reader"
 , "c2" : "Reader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00076"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#76"
 , "c1" : "Reader"
 , "c2" : "Reader(Object)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#97"
 , "c1" : "int"
 , "c2" : "read(java.nio.CharBuffer)"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00119"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#119"
 , "c1" : "int"
 , "c2" : "read()"
 , "c3" : "3"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00139"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#139"
 , "c1" : "int"
 , "c2" : "read(char[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00157"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#157"
 , "c1" : "int"
 , "c2" : "read(char[];int;int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00176"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#176"
 , "c1" : "long"
 , "c2" : "skip(long)"
 , "c3" : "5"
 , "c4" : "8"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00203"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#203"
 , "c1" : "boolean"
 , "c2" : "ready()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00214"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#214"
 , "c1" : "boolean"
 , "c2" : "markSupported()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00231"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#231"
 , "c1" : "void"
 , "c2" : "mark(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00248"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#248"
 , "c1" : "void"
 , "c2" : "reset()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00260"
 , "c5link" : "././qc/secujava/java.io.Reader.java.html#260"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/secujava/java.io.Reader.java.svg" }

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
 , "c1" : "./QcrReportFile01File1469Seq1.html#seq1"
 , "c1bis" : "./QcrReportFile01File0Seq0.html?numFile=1469&numSeq=1"
 , "c2" : "1"
 , "c3" : "3"
 , "c4" : "3"
 , "c5" : ["java.io.Reader.read@POLYN191036.return" , "java.io.Reader.read@POLYN191036.return"]
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
 , "sourcenoligne" : "[00100]"
 , "c3" : ["java.io.Reader.read@POLYN191036.return" , "---java.io.Reader.read@POLYN191036" , "java.io.Reader.read@POLYN190038.n"]
 , "c4" : "//QC-JAVCWZ099[00100] In java.io.Reader.read@POLYN190038[00100] source data PATHtainted (java.io.Reader.read) RiskOnInput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "2"
 , "sourcenoligne" : "[00102]"
 , "c3" : ["java.io.Reader.read@POLYN190038.n" , "---java.io.Reader.read@POLYN190038.dummymethode_00102" , "java.io.Reader.read@POLYN190038.cibledummy_00102"]
 , "c4" : "//QC-JAVCWZ099[00102] In java.io.Reader.read@POLYN190038[00102] source data PATHtainted (java.io.Reader.read) RiskOnInput"
 , "c5" : "input"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "3"
 , "sourcenoligne" : "[00122]"
 , "c3" : ["java.io.Reader.read@POLYN191036.-1" , "---java.io.Reader.read@POLYN191036.dummymethode_00122" , "java.io.Reader.read@POLYN191036.return"]
 , "c4" : "//QC-JAVCWZ099[00122] In java.io.Reader.read@POLYN191036[00122] source data PATHtainted (java.io.Reader.read) RiskOnInput"
 , "c5" : "input"
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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "21"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "5"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method java.io.Reader.Reader@POLYN189356 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method read arguments java.nio.CharBuffer  target"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#97"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00097] The argument target is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method java.io.Reader.read@POLYN190038 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00101"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#101"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00101] In method java.io.Reader.read@POLYN190038 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00102"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#102"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00102] In method java.io.Reader.read@POLYN190038 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00120"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#120"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00120] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00124"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#124"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00124] In method java.io.Reader.read@POLYN191036 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00139"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#139"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00139] For method read arguments char[]  cbuf"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method java.io.Reader.read@POLYN191732 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#157"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00157] For method read arguments char[]  cbuf|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00176"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#176"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00176] For method skip arguments long  n"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00180"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#180"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00180] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00177"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#177"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00177] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  0L should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  'skip value is negative' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00181"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#181"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00181] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00184"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#184"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00184] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00185"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#185"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00185] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00186"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#186"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00186] In method java.io.Reader.skip@POLYN192868 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00204"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#204"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00204] In method java.io.Reader.ready@POLYN194270 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00215"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#215"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00215] In method java.io.Reader.markSupported@POLYN194528 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00231"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#231"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00231] For method mark arguments int  readAheadLimit"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00232"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#232"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00232] In method java.io.Reader.mark@POLYN194964 the MagicNumber/String  'mark() not supported' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00249"
 , "c1link" : "./qc/secujava/java.io.Reader.java.html#249"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00249] In method java.io.Reader.reset@POLYN195540 the MagicNumber/String  'reset() not supported' should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.Reader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
