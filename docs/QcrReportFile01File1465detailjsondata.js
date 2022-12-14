console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/secujava/java.io.PipedReader.java.html" 
 , "texte" : "File secujava/java.io.PipedReader.java 71 rule violations " 
 , "fic2"  : "./qc/secujava/java.io.PipedReader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Reader"
 , "c2" : "java.io.PipedReader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "java.io.PipedReader" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00030"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#30"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#35"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#42"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#47"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00051"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#51"
 , "c1" : "void"
 , "c2" : "initPipe(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00059"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#59"
 , "c1" : "void"
 , "c2" : "connect(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#64"
 , "c1" : "void"
 , "c2" : "receive(int)"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00097"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#97"
 , "c1" : "void"
 , "c2" : "receive(char[];int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00104"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#104"
 , "c1" : "void"
 , "c2" : "receivedLast()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00110"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#110"
 , "c1" : "int"
 , "c2" : "read()"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00150"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#150"
 , "c1" : "int"
 , "c2" : "read(char[];int;int)"
 , "c3" : "13"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00189"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#189"
 , "c1" : "boolean"
 , "c2" : "ready()"
 , "c3" : "8"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00206"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#206"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/secujava/java.io.PipedReader.java.png" 

 , "ligneplantuml" : "./qc/secujava/java.io.PipedReader.java.svg" }

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
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "56"
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
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#51"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00051] For method initPipe arguments int  pipeSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method java.io.PipedReader.initPipe@POLYN198417 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00053"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#53"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00053] In method java.io.PipedReader.initPipe@POLYN198417 the MagicNumber/String  'Pipe size &amp;lt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#59"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00059] For method connect arguments PipedWriter  src"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#59"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00059] The argument src is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#64"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00064] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method receive arguments int  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00082] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  'Read end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00075"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00076"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00081"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00092"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#92"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00092] In method java.io.PipedReader.receive@POLYN199569 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#97"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00097] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#97"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00097] For method receive arguments char[]  c|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00098"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#98"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00098] In method java.io.PipedReader.receive@POLYN201247 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00104"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#104"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00104] Lock statement on synchronized method receivedLast"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00105"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#105"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00105] In method java.io.PipedReader.receivedLast@POLYN201628 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00110"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#110"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00110] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00134"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#134"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00134] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00114"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#114"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00114] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00115"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#115"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00115] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00116"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#116"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00116] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00117"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#117"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00117] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00121"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00122"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#122"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00122] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00125"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#125"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00125] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00127"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#127"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00127] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00128"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#128"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00128] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00133"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#133"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00133] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00140"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#140"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00140] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00144"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#144"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00144] In method java.io.PipedReader.read@POLYN202297 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#150"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00150] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00150] For method read arguments char[]  cbuf|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00150"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#150"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00150] For method read list of called methods Object monObjet|int readN206244"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00152"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#152"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00152] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00154"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#154"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00154] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00155"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#155"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00155] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00156"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#156"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00156] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00157"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#157"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00157] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00160"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#160"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00160] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00161"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#161"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00161] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00163"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#163"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00163] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00164"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00169"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#169"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00169] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00170"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#170"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00170] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00173"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#173"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00173] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00174"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#174"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00174] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00178"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#178"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00178] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00182"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#182"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00182] In method java.io.PipedReader.read@POLYN204897 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00189"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#189"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00189] Lock statement on synchronized method ready"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00191"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#191"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00191] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00193"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#193"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00193] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00194"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#194"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00194] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00195"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#195"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00195] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00196"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#196"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00196] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00198"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#198"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00198] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00199"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#199"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00199] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00201"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#201"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00201] In method java.io.PipedReader.ready@POLYN207494 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00207"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#207"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00207] In method java.io.PipedReader.close@POLYN208381 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00208"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#208"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00208] In method java.io.PipedReader.close@POLYN208381 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.PipedReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
