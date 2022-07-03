console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java 17 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.connect.data.Decimal"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.connect.data.Decimal" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SchemaBuilder"
 , "c2" : "builder(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "Schema"
 , "c2" : "schema(int)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "byte[]"
 , "c2" : "fromLogical(Schema;BigDecimal)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "BigDecimal"
 , "c2" : "toLogical(Schema;byte[])"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : {
   "c1" : "int"
 , "c2" : "scale(Schema)"
 , "c3" : "2"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.png" 

 , "ligneplantuml" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.svg" }

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
 , "c4" : "3"
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
 , "c4" : "5"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class Decimal contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#15"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00015] For method builder arguments int  scale"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#19"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00019] In method org.apache.kafka.connect.data.Decimal.builder@POLYN174591 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00022"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#22"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00022] For method schema arguments int  scale"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method fromLogical arguments Schema  schema|BigDecimal  value"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00027] For method fromLogical list of called methods Object monObjet|int scaleN175309"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument value is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00031"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#31"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00031] In method org.apache.kafka.connect.data.Decimal.fromLogical@POLYN175187 the MagicNumber/String  'Decimal value has mismatching scale for given Decimal schema. ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00032"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#32"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00032] In method org.apache.kafka.connect.data.Decimal.fromLogical@POLYN175187 the MagicNumber/String  'Schema has scale %d, value has scale %d.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method toLogical arguments Schema  schema|byte[]  value"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00043] For method scale arguments Schema  schema"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#43"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00043] For method scale list of called methods Object monObjet|java.util.Map&lt;String,String&gt; schema_parametersN176097"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#43"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00043] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00045"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#45"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00045] In method org.apache.kafka.connect.data.Decimal.scale@POLYN176000 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00046"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#46"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00046] In method org.apache.kafka.connect.data.Decimal.scale@POLYN176000 the MagicNumber/String  'Invalid Decimal schema: scale parameter not found.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00050"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Decimal.java.html#50"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00050] In method org.apache.kafka.connect.data.Decimal.scale@POLYN176000 the MagicNumber/String  'Invalid scale parameter found in Decimal schema: ' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
