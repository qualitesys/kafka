console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html" 
 , "texte" : "File clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java 9 rule violations " 
 , "fic2"  : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.common.utils.Sanitizer"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.common.utils.Sanitizer" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00021"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#21"
 , "c1" : "String"
 , "c2" : "sanitize(String)"
 , "c3" : "6"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#43"
 , "c1" : "String"
 , "c2" : "desanitize(String)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00052"
 , "c5link" : "././qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#52"
 , "c1" : "String"
 , "c2" : "jmxSanitize(String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.png" 

 , "ligneplantuml" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00021"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#21"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00021] For method sanitize arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  '' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00026"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#26"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00026] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00028"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#28"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00028] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  '*' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  '%2A' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  '+' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.common.utils.Sanitizer.sanitize@POLYN155075 the MagicNumber/String  '%20' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method desanitize arguments String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.html#52"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00052] For method jmxSanitize arguments String  name"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/clients/src/main/java/org/apache/kafka/common/utils/Sanitizer.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
