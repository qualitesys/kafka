console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html" 
 , "texte" : "File trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java 7 rule violations " 
 , "fic2"  : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.xml" 
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
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "3"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00015"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#15"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00015] The class RestExceptionMapper contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00019"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#19"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00019] For method toResponse arguments Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00021] In method org.apache.kafka.trogdor.rest.RestExceptionMapper.toResponse@POLYN164837 the MagicNumber/String  'Uncaught exception in REST call: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00023"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#23"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00023] In method org.apache.kafka.trogdor.rest.RestExceptionMapper.toResponse@POLYN164837 the MagicNumber/String  'Uncaught exception in REST call: {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00044"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#44"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00044] For method toException arguments int  code|String  msg"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#58"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00058] For method buildResponse arguments Response.Status  code|Throwable  e"
}} 
,
{ "ligne" : {
   "c1" : "00058"
 , "c1link" : "./qc/trogdor/src/main/java/org/apache/kafka/trogdor/rest/RestExceptionMapper.java.html#58"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00058] The argument code is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
]
};
console.log('leListeStr 99 main end');
