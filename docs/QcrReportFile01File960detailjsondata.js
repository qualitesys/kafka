console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java 16 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "Header"
 , "c2" : "org.apache.kafka.connect.header.ConnectHeader"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.header.ConnectHeader" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "ConnectHeader"
 , "c2" : "ConnectHeader(String;SchemaAndValue)"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "key()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Object"
 , "c2" : "value()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "schema()"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Header"
 , "c2" : "rename(String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "Header"
 , "c2" : "with(Schema;Object)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "hashCode()"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "equals(Object)"
 , "c3" : "3"
 , "c4" : "4"
}} 
,
{ "ligne" : {
   "c1" : "String"
 , "c2" : "toString()"
 , "c3" : "1"
 , "c4" : "1"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.svg" }

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
{ "ligne" : {
   "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
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
 , "c4" : "10"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00011"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#11"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00011] The class ConnectHeader contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.connect.header.ConnectHeader.ConnectHeader@POLYN150606 the MagicNumber/String  'Null header keys are not permitted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.connect.header.ConnectHeader.ConnectHeader@POLYN150606 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00035"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#35"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00035] For method schema list of called methods Object monObjet|org.apache.kafka.connect.data.Schema schemaAndValue_schemaN151302"
}} 
,
{ "ligne" : {
   "c1" : "00037"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#37"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00037] In method org.apache.kafka.connect.header.ConnectHeader.schema@POLYN151227 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method rename arguments String  key"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#44"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00044] The argument key is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.header.ConnectHeader.rename@POLYN151655 the MagicNumber/String  'Null header keys are not permitted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method with arguments Schema  schema|Object  value"
}} 
,
{ "ligne" : {
   "c1" : "00063"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#63"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00063] For method equals arguments Object  obj"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00065] In method org.apache.kafka.connect.header.ConnectHeader.equals@POLYN152492 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00072"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.connect.header.ConnectHeader.equals@POLYN152492 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.header.ConnectHeader.toString@POLYN153231 the MagicNumber/String  'ConnectHeader(key=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.header.ConnectHeader.toString@POLYN153231 the MagicNumber/String  ', value=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.header.ConnectHeader.toString@POLYN153231 the MagicNumber/String  ', schema=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/header/ConnectHeader.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.connect.header.ConnectHeader.toString@POLYN153231 the MagicNumber/String  ')' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
