console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.PipedWriter.java.html" 
 , "texte" : "File secujava/java.io.PipedWriter.java 22 rule violations " 
 , "fic2"  : "./qc/secujava/java.io.PipedWriter.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Writer"
 , "c2" : "java.io.PipedWriter"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.PipedWriter" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00017"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#17"
 , "c1" : "PipedWriter"
 , "c2" : "PipedWriter(PipedReader)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00022"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#22"
 , "c1" : "PipedWriter"
 , "c2" : "PipedWriter()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00026"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#26"
 , "c1" : "void"
 , "c2" : "connect(PipedReader)"
 , "c3" : "6"
 , "c4" : "7"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#42"
 , "c1" : "void"
 , "c2" : "write(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#50"
 , "c1" : "void"
 , "c2" : "write(char[];int;int)"
 , "c3" : "4"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#60"
 , "c1" : "void"
 , "c2" : "flush()"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/secujava/java.io.PipedWriter.java.html#72"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/secujava/java.io.PipedWriter.java.png" 

 , "ligneplantuml" : "./qc/secujava/java.io.PipedWriter.java.svg" }

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
"data11" : [
]
, 
"data14" : [
]
, 
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "16"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
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
 , "c1" : "00026"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#26"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00026] Lock statement on synchronized method connect"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#26"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00026] For method connect arguments PipedReader  snk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00027"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#27"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00027] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  'Already connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00032"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#36"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00036] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00037"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method java.io.PipedWriter.connect@POLYN168829 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method write arguments int  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method java.io.PipedWriter.write@POLYN170133 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method java.io.PipedWriter.write@POLYN170133 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method write arguments char[]  cbuf|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method java.io.PipedWriter.write@POLYN171009 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method java.io.PipedWriter.write@POLYN171009 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method java.io.PipedWriter.write@POLYN171009 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#60"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00060] Lock statement on synchronized method flush"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#65"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00065] Lock statement on synchronized resource"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00061"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method java.io.PipedWriter.flush@POLYN171941 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method java.io.PipedWriter.flush@POLYN171941 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method java.io.PipedWriter.close@POLYN172480 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00074"
 , "c1link" : "./qc/secujava/java.io.PipedWriter.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00074] In method java.io.PipedWriter.close@POLYN172480 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.PipedWriter.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
