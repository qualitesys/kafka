console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.html" 
 , "texte" : "File streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java 3 rule violations " 
 , "fic3"  : "" 
}
, 
"data01" : [
{ "ligne" : { "" : ""
 , "c1" : "java.lang.Object"
 , "c2" : "org.apache.kafka.streams.state.internals.KeyValueIterators"
}} 
]
, 
"data02" : [
{ "classe" : 
 { "nomclasse" : "org.apache.kafka.streams.state.internals.KeyValueIterators" , "link" : "" , "methodes" : [ 
] 
}} 
]
, 
"data03" : [
   {

 "ligneplantuml" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.svg" }

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
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAV000004"
 , "c3" : "You must segregate your interface"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "BLOCKER"
 , "c2" : "QC-JAVSOLIDL"
 , "c3" : "The class does not respect the SOLID principle Liskov Substitution"
 , "c4" : "1"
}}
,
{ "ligne" : { "" : ""
 , "c1" : "MAJOR"
 , "c2" : "QC-JAV000010"
 , "c3" : "MagicNumber Strings and numbers should be converted to constants"
 , "c4" : "1"
}}
 ] 
,
"data13b" : [
{ "ligne" : {"" : ""
 , "c1" : "00041"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.html#41"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00041] In method org.apache.kafka.streams.state.internals.KeyValueIterators.EmptyKeyValueIterator.hasNext@POLYN148246 the MagicNumber/String  false should be converted to const"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000004[00031] Valued method close is empty or contains only a return. Interface segregation for KeyValueIterator&lt;K,V&gt;"
}} 
,
{ "ligne" : {"" : ""
 , "c1" : "00031"
 , "c1link" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.html#31"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAVSOLIDL[00031] In the class EmptyKeyValueIterator which implements the interface(s) KeyValueIterator&lt;K,V&gt;, the method close is empty or contains only a return or triggers an exception. The SOLID Liskov Segregation principle is not respectedKeyValueIterator&lt;K,V&gt;"
}} 
]
, 
"data15" : {
   "fichierplantumlsvg" : "./qc/streams/src/main/java/org/apache/kafka/streams/state/internals/KeyValueIterators.java.fct.svg" 

, 
}
};
console.log('leListeStr 99 main end');
