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
 , "c5" : "00081"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#81"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(PipedWriter;int)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "PipedReader"
 , "c2" : "PipedReader(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "void"
 , "c2" : "initPipe(int)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "void"
 , "c2" : "connect(PipedWriter)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00271"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#271"
 , "c1" : "void"
 , "c2" : "receive(int)"
 , "c3" : "10"
 , "c4" : "12"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
 , "c1" : "void"
 , "c2" : "receive(char[];int;int)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
 , "c1" : "void"
 , "c2" : "receivedLast()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
 , "c1" : "int"
 , "c2" : "read()"
 , "c3" : "11"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
 , "c1" : "int"
 , "c2" : "read(char[];int;int)"
 , "c3" : "13"
 , "c4" : "14"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
 , "c1" : "boolean"
 , "c2" : "ready()"
 , "c3" : "8"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00001"
 , "c5link" : "././qc/secujava/java.io.PipedReader.java.html#1"
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
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00271] For method initPipe arguments int  pipeSize"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.initPipe@POLYN199157 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.initPipe@POLYN199157 the MagicNumber/String  'Pipe size &amp;lt;= 0' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00271] For method connect arguments PipedWriter  src"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00271] The argument src is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00271] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00271] For method receive arguments int  c"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  'Read end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00271"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#271"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00271] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN200309 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method receive"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method receive arguments char[]  c|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receive@POLYN201987 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method receivedLast"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.receivedLast@POLYN202368 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00001] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  2 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  'Pipe broken' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  1000 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN203037 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method read"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00001] For method read arguments char[]  cbuf|int  off|int  len"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00001] For method read list of called methods Object monObjet|int readN206984"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.read@POLYN205637 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00001] Lock statement on synchronized method ready"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  'Pipe not connected' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  'Pipe closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  'Write end dead' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.ready@POLYN208234 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.close@POLYN209121 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/secujava/java.io.PipedReader.java.html#1"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00001] In method java.io.PipedReader.close@POLYN209121 the MagicNumber/String  true should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/secujava/java.io.PipedReader.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
