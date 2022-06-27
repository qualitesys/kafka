console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java 11 rule violations " 
 , "fic2"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.xml" 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : {
   "c1" : "KeyValueIterator<Bytes,byte[]>"
 , "c2" : "org.apache.kafka.streams.state.internals.SegmentIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.SegmentIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : {
   "c1" : "SegmentIterator"
 , "c2" : "SegmentIterator(Iterator<S>;HasNextCondition;Bytes;Bytes;boolean)"
 , "c3" : "1"
 , "c4" : "5"
}} 
,
{ "ligne" : {
   "c1" : "void"
 , "c2" : "close()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "Bytes"
 , "c2" : "peekNextKey()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "6"
}} 
,
{ "ligne" : {
   "c1" : "boolean"
 , "c2" : "hasNextConditionHasNext()"
 , "c3" : "1"
 , "c4" : "3"
}} 
,
{ "ligne" : {
   "c1" : "KeyValue<Bytes,byte[]>"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {"ligne" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.png" 

 , "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.svg" }

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
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE390"
 , "c3" : "Detection of error condition without action"
 , "c4" : "2"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAVCWE481"
 , "c3" : "Assigning instead of comparing"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000001"
 , "c3" : "Instance is created within a loop, huge performance impact"
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
 , "c4" : "6"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00013"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#13"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00013] The class SegmentIterator contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00038"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#38"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00038] In method org.apache.kafka.streams.state.internals.SegmentIterator.close@POLYN167852 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#40"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00040] In method org.apache.kafka.streams.state.internals.SegmentIterator.close@POLYN167852 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE481[00055] Assigning instead of comparing on hasNext=hasNextConditionHasNext() (see http://cwe.mitre.org/data/definitions/481.html)"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000001[00065] Avoid declaring class instance within loop, performance impact"
}} 
,
{ "ligne" : {
   "c1" : "00065"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#65"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00065] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00054"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#54"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00054] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN168344 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#55"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00055] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN168344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00069"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#69"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00069] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNext@POLYN168344 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAVCWE390[00076] Detection of error condition without action (see http://cwe.mitre.org/data/definitions/390.html)"
}} 
,
{ "ligne" : {
   "c1" : "00073"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/SegmentIterator.java.html#73"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00073] In method org.apache.kafka.streams.state.internals.SegmentIterator.hasNextConditionHasNext@POLYN169301 the MagicNumber/String  false should be converted to const"
}} 
]
};
console.log('leListeStr 99 main end');
