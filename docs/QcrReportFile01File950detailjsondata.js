console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Time.java 15 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.Time"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.Time" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00044"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#44"
 , "c1" : "SchemaBuilder"
 , "c2" : "builder()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#57"
 , "c1" : "int"
 , "c2" : "fromLogical(Schema;java.util.Date)"
 , "c3" : "3"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00069"
 , "c5link" : "././qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#69"
 , "c1" : "java.util.Date"
 , "c2" : "toLogical(Schema;int)"
 , "c3" : "3"
 , "c4" : "3"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.svg" }

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
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV999993"
 , "c3" : "In the recursive method xxx the Magic Number / String must be converted to const"
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "2"
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
 , "c4" : "7"
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
 , "c1" : "00047"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#47"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00047] In method org.apache.kafka.connect.data.Time.builder@POLYN161182 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method fromLogical arguments Schema  schema|java.util.Date  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#57"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00057] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String  'Requested conversion of Time object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#63"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00063] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String  'Kafka Connect Time type should not have any date fields set to non-zero values.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#69"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00069] For method toLogical arguments Schema  schema|int  value"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00069"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#69"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00069] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.connect.data.Time.toLogical@POLYN162417 the MagicNumber/String  'Requested conversion of Date object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.data.Time.toLogical@POLYN162417 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00073"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.connect.data.Time.toLogical@POLYN162417 the MagicNumber/String  'Time values must use number of milliseconds greater than 0 and less than 86400000' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.data.Time.fromLogical@POLYN161594"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#59"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00059] In the recursive method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String 'Requested conversion of Time object but the schema does not match.' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#63"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00063] In the recursive method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String 0 MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#64"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00064] In the recursive method org.apache.kafka.connect.data.Time.fromLogical@POLYN161594 the MagicNumber/String 'Kafka Connect Time type should not have any date fields set to non-zero values.' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
