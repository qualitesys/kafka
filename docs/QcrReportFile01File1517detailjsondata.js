console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html" 
 , "texte" : "File streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java 8 rule violations " 
 , "fic2"  : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "TimestampExtractor"
 , "c2" : "org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c1" : "long"
 , "c2" : "extract(ConsumerRecord<Object,Object>;long)"
 , "c3" : "4"
 , "c4" : "4"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.png" 

 , "ligneplantuml" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.svg" }

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
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "CRITICAL"
 , "c2" : "QC-JAVCWE476"
 , "c3" : "Null pointer reference"
 , "c4" : "1"
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
 , "c2" : "QC-JAV000008"
 , "c3" : "The class should be static contains no field, constructor, destructor"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00009"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#9"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00009] The class JsonTimestampExtractor contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#12"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00012] For method extract arguments ConsumerRecord&lt;Object ,Object &gt;  record|long  partitionTime"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00012"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#12"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00012] The argument record is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#22"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00022] In method org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor.extract@POLYN144947 the MagicNumber/String  'timestamp' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#25"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00025] In method org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor.extract@POLYN144947 the MagicNumber/String  'JsonTimestampExtractor cannot recognize the record value ' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00001"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#1"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAV999994[00001] Recursive call with depth 1 for org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor.extract@POLYN144947"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00022"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#22"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00022] In the recursive method org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor.extract@POLYN144947 the MagicNumber/String 'timestamp' MUST BE CONVERTED to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00025"
 , "c1link" : "./qc/streams/examples/src/main/java/org/apache/kafka/streams/examples/pageview/JsonTimestampExtractor.java.html#25"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV999993[00025] In the recursive method org.apache.kafka.streams.examples.pageview.JsonTimestampExtractor.extract@POLYN144947 the MagicNumber/String 'JsonTimestampExtractor cannot recognize the record value ' MUST BE CONVERTED to const"
}} 
]
};
console.log('leListeStr 99 main end');
