console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html" 
 , "texte" : "File generator/src/main/java/org/apache/kafka/message/CodeBuffer.java 16 rule violations " 
 , "fic2"  : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.message.CodeBuffer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.message.CodeBuffer" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "CodeBuffer"
 , "c2" : "CodeBuffer()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "incrementIndent()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "decrementIndent()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "printf(String;Object...)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(Writer)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "write(CodeBuffer)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "indentSpaces()"
 , "c3" : "2"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.png" 

 , "ligneplantuml" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.svg" }

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
"data12a" : [
]
,
"data12b" : [
]
,
"data12c" : [
]
,
"data13a" : [
{ "ligne" : {
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "6"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00009"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class CodeBuffer contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00015] In method org.apache.kafka.message.CodeBuffer.CodeBuffer@POLYN165622 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00024"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#24"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00024] In method org.apache.kafka.message.CodeBuffer.decrementIndent@POLYN165900 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00025"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.message.CodeBuffer.decrementIndent@POLYN165900 the MagicNumber/String  'Indent &amp;lt; 0' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method printf arguments String  format|Object  ...args"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#33"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00033] For method write arguments Writer  writer"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#33"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00033] The argument writer is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method write arguments CodeBuffer  other"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument other is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.message.CodeBuffer.indentSpaces@POLYN166876 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#48"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00048] In method org.apache.kafka.message.CodeBuffer.indentSpaces@POLYN166876 the MagicNumber/String  '    ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#54"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00054] For method equals arguments Object  other"
}} 
,
{ "ligne" : {
   "c1" : "00056"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.message.CodeBuffer.equals@POLYN167307 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00001"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.message.CodeBuffer.indentSpaces@POLYN166876"
}} 
,
{ "ligne" : {
   "c1" : "00047"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#47"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00047] In the recursive method org.apache.kafka.message.CodeBuffer.indentSpaces@POLYN166876 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {
   "c1" : "00048"
 , "c1link" : "./qc/generator/src/main/java/org/apache/kafka/message/CodeBuffer.java.html#48"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00048] In the recursive method org.apache.kafka.message.CodeBuffer.indentSpaces@POLYN166876 the MagicNumber/String '    ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
