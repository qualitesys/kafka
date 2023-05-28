console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java 28 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.transforms.util.Requirements"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.util.Requirements" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00029"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#29"
 , "c1" : "void"
 , "c2" : "requireSchema(Schema;String)"
 , "c3" : "2"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00036"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#36"
 , "c1" : "Map&lt;String,Object&gt;"
 , "c2" : "requireMap(Object;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00043"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#43"
 , "c1" : "Map&lt;String,Object&gt;"
 , "c2" : "requireMapOrNull(Object;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00050"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#50"
 , "c1" : "Struct"
 , "c2" : "requireStruct(Object;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00057"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#57"
 , "c1" : "Struct"
 , "c2" : "requireStructOrNull(Object;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00064"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#64"
 , "c1" : "SinkRecord"
 , "c2" : "requireSinkRecord(ConnectRecord&lt;?&gt;;String)"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#71"
 , "c1" : "String"
 , "c2" : "nullSafeClassName(Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.svg" }

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
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAV999994"
 , "c3" : "Recursivity with depth  1 for method xx"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "15"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "7"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00029"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#29"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00029] For method requireSchema arguments Schema  schema|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00030"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#30"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00030] In method org.apache.kafka.connect.transforms.util.Requirements.requireSchema@POLYN158799 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.connect.transforms.util.Requirements.requireSchema@POLYN158799 the MagicNumber/String  'Schema required for [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.connect.transforms.util.Requirements.requireSchema@POLYN158799 the MagicNumber/String  ']' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00036"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#36"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00036] For method requireMap arguments Object  value|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.transforms.util.Requirements.requireMap@POLYN159177 the MagicNumber/String  'Only Map objects supported in absence of schema for [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00038"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.connect.transforms.util.Requirements.requireMap@POLYN159177 the MagicNumber/String  '], found: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00043"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method requireMapOrNull arguments Object  value|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.connect.transforms.util.Requirements.requireMapOrNull@POLYN159679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00045"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.transforms.util.Requirements.requireMapOrNull@POLYN159679 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00050"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#50"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00050] For method requireStruct arguments Object  value|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.transforms.util.Requirements.requireStruct@POLYN159981 the MagicNumber/String  'Only Struct objects supported for [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#52"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00052] In method org.apache.kafka.connect.transforms.util.Requirements.requireStruct@POLYN159981 the MagicNumber/String  '], found: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#57"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00057] For method requireStructOrNull arguments Object  value|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00058"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#58"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00058] In method org.apache.kafka.connect.transforms.util.Requirements.requireStructOrNull@POLYN160409 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.util.Requirements.requireStructOrNull@POLYN160409 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#64"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00064] For method requireSinkRecord arguments ConnectRecord&lt;? &gt;  record|String  purpose"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.transforms.util.Requirements.requireSinkRecord@POLYN160711 the MagicNumber/String  'Only SinkRecord supported for [' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#66"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00066] In method org.apache.kafka.connect.transforms.util.Requirements.requireSinkRecord@POLYN160711 the MagicNumber/String  '], found: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method nullSafeClassName arguments Object  x"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.transforms.util.Requirements.nullSafeClassName@POLYN161154 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.transforms.util.Requirements.nullSafeClassName@POLYN161154 the MagicNumber/String  'null' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.transforms.util.Requirements.requireStruct@POLYN159981"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.connect.transforms.util.Requirements.requireSinkRecord@POLYN160711"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.connect.transforms.util.Requirements.requireStruct@POLYN159981 the MagicNumber/String 'Only Struct objects supported for [' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00052"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#52"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00052] In the recursive method org.apache.kafka.connect.transforms.util.Requirements.requireStruct@POLYN159981 the MagicNumber/String '], found: ' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.connect.transforms.util.Requirements.requireSinkRecord@POLYN160711 the MagicNumber/String 'Only SinkRecord supported for [' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00066"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.html#66"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00066] In the recursive method org.apache.kafka.connect.transforms.util.Requirements.requireSinkRecord@POLYN160711 the MagicNumber/String '], found: ' MUST BE CONVERTED to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/util/Requirements.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
