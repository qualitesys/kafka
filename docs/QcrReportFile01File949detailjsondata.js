console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html" 
 , "texte" : "File connect/api/src/main/java/org/apache/kafka/connect/data/Time.java 12 rule violations " 
 , "fic2"  : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
]
, 
"data02" : [
]
, 
"data03" : [
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
 , "c4" : "2"
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
 , "c4" : "7"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "2"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00010"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#10"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00010] The class Time contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.connect.data.Time.builder@POLYN163674 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#27"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00027] For method fromLogical arguments Schema  schema|java.util.Date  value"
}} 
,
{ "ligne" : {
   "c1" : "00027"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#27"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00027] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00029"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#29"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00029] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN164086 the MagicNumber/String  'Requested conversion of Time object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00033"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#33"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00033] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN164086 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00034"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#34"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00034] In method org.apache.kafka.connect.data.Time.fromLogical@POLYN164086 the MagicNumber/String  'Kafka Connect Time type should not have any date fields set to non-zero values.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#39"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00039] For method toLogical arguments Schema  schema|int  value"
}} 
,
{ "ligne" : {
   "c1" : "00039"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#39"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00039] The argument schema is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00041"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.connect.data.Time.toLogical@POLYN164905 the MagicNumber/String  'Requested conversion of Date object but the schema does not match.' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00042"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#42"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00042] In method org.apache.kafka.connect.data.Time.toLogical@POLYN164905 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00043"
 , "c1link" : "./qc/connect/api/src/main/java/org/apache/kafka/connect/data/Time.java.html#43"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00043] In method org.apache.kafka.connect.data.Time.toLogical@POLYN164905 the MagicNumber/String  'Time values must use number of milliseconds greater than 0 and less than 86400000' should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
