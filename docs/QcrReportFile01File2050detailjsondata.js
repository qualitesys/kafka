console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java 11 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : ""
 , "c2" : "KeyValueIterator<K,V>,PeekingKeyValueIterator<K,V>"
 , "c2" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator" , "link" : "" , "methodes" : [ 
{ "ligne" : { "" : ""
 , "c5" : "00035"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#35"
 , "c1" : "DelegatingPeekingKeyValueIterator"
 , "c2" : "DelegatingPeekingKeyValueIterator(String;KeyValueIterator&lt;K,V&gt;)"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00041"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#41"
 , "c1" : "K"
 , "c2" : "peekNextKey()"
 , "c3" : "2"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00049"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#49"
 , "c1" : "void"
 , "c2" : "close()"
 , "c3" : "1"
 , "c4" : "2"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00055"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#55"
 , "c1" : "boolean"
 , "c2" : "hasNext()"
 , "c3" : "4"
 , "c4" : "5"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00072"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#72"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "next()"
 , "c3" : "2"
 , "c4" : "4"
}} 
,
{ "ligne" : { "" : ""
 , "c5" : "00082"
 , "c5link" : "././qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#82"
 , "c1" : "KeyValue&lt;K,V&gt;"
 , "c2" : "peekNext()"
 , "c3" : "2"
 , "c4" : "2"
}} 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.svg" }

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
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "7"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "INFO"
 , "c2" : "QC-JAV000019"
 , "c3" : "Lock statement"
 , "c4" : "4"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#41"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00041] Lock statement on synchronized method peekNextKey"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00049"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#49"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00049] Lock statement on synchronized method close"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00051"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#51"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00051] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.close@POLYN159434 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00055"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#55"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00055] Lock statement on synchronized method hasNext"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00057"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#57"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00057] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.hasNext@POLYN159610 the MagicNumber/String  'Store %s has closed' should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00059"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#59"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00059] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.hasNext@POLYN159610 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00060"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#60"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00060] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.hasNext@POLYN159610 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00064"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#64"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00064] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.hasNext@POLYN159610 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00068"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#68"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00068] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.hasNext@POLYN159610 the MagicNumber/String  true should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00072"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#72"
 , "c2" : "INFO"
 , "c3" : "QC-JAV000019[00072] Lock statement on synchronized method next"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00077"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.streams.state.internals.DelegatingPeekingKeyValueIterator.next@POLYN160250 the MagicNumber/String  null should be converted to const"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/DelegatingPeekingKeyValueIterator.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
