console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.SegmentIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.SegmentIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#41"
 , "c1" : "SegmentIterator"
 , "c2" : "SegmentIterator(Iterator&lt;S&gt;;HasNextCondition;Bytes;Bytes;boolean)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00054"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#54"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00062"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#62"
 , "c1" : "Bytes"
 , "c2" : "peekNextKey()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00070"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#70"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00089"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#89"
 , "c1" : "boolean"
 , "c2" : "hasNextConditionHasNext()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00100"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#100"
 , "c1" : "KeyValue&lt;Bytes,byte[]&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.svg" }

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
"data13a" : [
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "2"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
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
 , "c4" : "6"
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
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.SegmentIterator.close@POLYN161378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.state.internals.SegmentIterator.close@POLYN161378 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00070"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#70"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000007[00070] For method hasNext list of called methods Object monObjet|boolean hasNextConditionHasNextN162102"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00072] Assigning instead of comparing on hasNext=hasNextConditionHasNext() (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00082] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00082"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00082] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00071"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#71"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00071] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN161870 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#72"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00072] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN161870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00086"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#86"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00086] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN161870 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00093"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#93"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00093] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00090"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#90"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00090] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNextConditionHasNext@POLYN162829 the MagicNumber/String  false should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
