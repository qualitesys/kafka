console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html" 
 , "texte" : "File connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java 15 rule violations " 
 , "fic2"  : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "Transformation<R>"
 , "c2" : "org.apache.kafka.connect.transforms.ValueToKey"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.transforms.ValueToKey" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00056"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#56"
 , "c1" : "void"
 , "c2" : "configure(Map<String,?>)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00063"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#63"
 , "c1" : "R"
 , "c2" : "apply(R)"
 , "c3" : "3"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00071"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#71"
 , "c1" : "R"
 , "c2" : "applySchemaless(R)"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00080"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#80"
 , "c1" : "R"
 , "c2" : "applyWithSchema(R)"
 , "c3" : "5"
 , "c4" : "11"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00106"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#106"
 , "c1" : "ConfigDef"
 , "c2" : "config()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00111"
 , "c5link" : "././qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#111"
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
   {"ligne" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.png" 

 , "ligneplantuml" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.svg" }

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
 , "c4" : "3"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00056"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#56"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00056] For method configure arguments Map&lt;String ,? &gt;  configs"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.connect.transforms.ValueToKey.configure@POLYN160209 the MagicNumber/String  16 should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method apply arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00063"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#63"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00063] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.connect.transforms.ValueToKey.apply@POLYN160690 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#71"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00071] For method applySchemaless arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#71"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00071] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.transforms.ValueToKey.applySchemaless@POLYN161008 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#80"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00080] For method applyWithSchema arguments R  record"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00080"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#80"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00080] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00087"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00087] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00084"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.connect.transforms.ValueToKey.applyWithSchema@POLYN161933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.connect.transforms.ValueToKey.applyWithSchema@POLYN161933 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.connect.transforms.ValueToKey.applyWithSchema@POLYN161933 the MagicNumber/String  'Field does not exist: ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00112"
 , "c1link" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.html#112"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00112] In method org.apache.kafka.connect.transforms.ValueToKey.close@POLYN163775 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/connect/transforms/src/main/java/org/apache/kafka/connect/transforms/ValueToKey.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
