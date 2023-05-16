console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html" 
 , "texte" : "File connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java 7 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "org.apache.kafka.connect.util.SafeObjectInputStream"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.util.SafeObjectInputStream" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00047"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#47"
 , "c1" : "SafeObjectInputStream"
 , "c2" : "SafeObjectInputStream(InputStream)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#52"
 , "c1" : "Class&lt;?&gt;"
 , "c2" : "resolveClass(ObjectStreamClass)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#62"
 , "c1" : "boolean"
 , "c2" : "isBlocked(String)"
 , "c3" : "3"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.svg" }

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
]
,
"data09b" : [
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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method resolveClass arguments ObjectStreamClass  desc"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#52"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00052] The argument desc is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#56"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00056] In method org.apache.kafka.connect.util.SafeObjectInputStream.resolveClass@POLYN151942 the MagicNumber/String  'Illegal type to deserialize: prevented for security reasons' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#62"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00062] For method isBlocked arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#62"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00062] The argument name is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00065"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.util.SafeObjectInputStream.isBlocked@POLYN152340 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.connect.util.SafeObjectInputStream.isBlocked@POLYN152340 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/runtime/src/main/java/org/apache/kafka/connect/util/SafeObjectInputStream.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
