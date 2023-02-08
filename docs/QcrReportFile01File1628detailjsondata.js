console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java 16 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.internals.ApiUtils"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.internals.ApiUtils" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00033"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#33"
 , "c1" : "ApiUtils"
 , "c2" : "ApiUtils()"
 , "c3" : "1"
 , "c4" : "0"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00042"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#42"
 , "c1" : "long"
 , "c2" : "validateMillisecondDuration(Duration;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00060"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#60"
 , "c1" : "long"
 , "c2" : "validateMillisecondInstant(Instant;String)"
 , "c3" : "2"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00078"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#78"
 , "c1" : "String"
 , "c2" : "prepareMillisCheckFailMsgPrefix(Object;String)"
 , "c3" : "1"
 , "c4" : "1"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00085"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#85"
 , "c1" : "void"
 , "c2" : "checkSupplier(Supplier&lt;?&gt;)"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.svg" }

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
 , "c4" : "6"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "4"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000007"
 , "c3" : "List of methods called in the body"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00042"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#42"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00042] For method validateMillisecondDuration arguments Duration  duration|String  messagePrefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00044"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#44"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00044] In method org.apache.kafka.streams.internals.ApiUtils.validateMillisecondDuration@POLYN155180 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#60"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00060] For method validateMillisecondInstant arguments Instant  instant|String  messagePrefix"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00062"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.streams.internals.ApiUtils.validateMillisecondInstant@POLYN155857 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00078"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#78"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00078] For method prepareMillisCheckFailMsgPrefix arguments Object  value|String  name"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00085] For method checkSupplier arguments Supplier&lt;? &gt;  supplier"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#85"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00085] For method checkSupplier list of called methods Object monObjet|java.lang.Class supplier_getClassN157001"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00085"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#85"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00085] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00086] The same method call supplier.get() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00088"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.streams.internals.ApiUtils.checkSupplier@POLYN156774 the MagicNumber/String  '%s generates single reference.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00089"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#89"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00089] In method org.apache.kafka.streams.internals.ApiUtils.checkSupplier@POLYN156774 the MagicNumber/String  ' %s#get() must return a new object each time it is called.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00096"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#96"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00096] The argument supplier is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00097"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#97"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00097] The same method call supplier.get() is used several times, should be optimized "
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00099"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#99"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00099] In method org.apache.kafka.streams.internals.ApiUtils the MagicNumber/String  '%s generates single reference.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00100"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#100"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00100] In method org.apache.kafka.streams.internals.ApiUtils the MagicNumber/String  ' %s#get() must return a new object each time it is called.' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.internals.ApiUtils.prepareMillisCheckFailMsgPrefix@POLYN156510"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/internals/ApiUtils.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
