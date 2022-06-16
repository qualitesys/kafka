console.log('leListeStr main01 start json de data maDataBlocs');
var maDataBlocs = {
"data00" : {
   "fic1"  : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html" 
 , "texte" : "File raft/src/main/java/org/apache/kafka/raft/QuorumState.java 92 rule violations " 
 , "fic2"  : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.xml" 
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
   "c1" : "BLOCKER"
 , "c2" : "QC-JAV000003"
 , "c3" : "High risk of strong class coupling"
 , "c4" : "4"
}}
,
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
 , "c4" : "76"
}}
,
{ "ligne" : {
   "c1" : "MAJOR"
 , "c2" : "QC-JAV000021"
 , "c3" : "The same method is called several times, might be optimized"
 , "c4" : "1"
}}
,
{ "ligne" : {
   "c1" : "MINOR"
 , "c2" : "QC-JAV000006"
 , "c3" : "Argument list of the method"
 , "c4" : "8"
}}
 ] 
,
"data13b" : [
{ "ligne" : {
   "c1" : "00021"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#21"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000008[00021] The class QuorumState contains no field, constructor, finalize. Must contain only static methods, check it"
}} 
,
{ "ligne" : {
   "c1" : "00040"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#40"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00040] The argument logContext is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#53"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00053] For method initialize arguments OffsetAndEpoch  logEndOffsetAndEpoch"
}} 
,
{ "ligne" : {
   "c1" : "00053"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#53"
 , "c2" : "CRITICAL"
 , "c3" : "QC-JAVCWE476[00053] The argument logEndOffsetAndEpoch is a class instance but is not tested towards null, but referenced in attribute invocation in the method body, NPE potential risk"
}} 
,
{ "ligne" : {
   "c1" : "00074"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#74"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000021[00074] The same method call voters.equals(election.voters()) is used several times, should be optimized "
}} 
,
{ "ligne" : {
   "c1" : "00061"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#61"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00061] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00062"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#62"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00062] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00067"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#67"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00067] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'Clearing local quorum state store after error loading state {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00070"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#70"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00070] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00075"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#75"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00075] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'Configured voter set: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00076"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#76"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00076] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  ' is different from the voter set read from the state file: ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00077"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#77"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00077] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  '. Check if the quorum configuration is up to date, ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00078"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#78"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00078] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'or wipe out the local state file if necessary' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00081"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#81"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00081] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  ' is not a voter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00082"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#82"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00082] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'is undefined' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00083"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#83"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00083] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'Initialized quorum state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00084"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#84"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00084] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  ' with a voted candidate, which indicates this node was previously ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00085"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#85"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00085] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  ' a voter, but the local id ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00087"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#87"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00087] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'Epoch from quorum-state file is {}, which is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00088"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#88"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00088] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  'smaller than last written epoch {} in the log' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00121"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#121"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00121] In method org.apache.kafka.raft.QuorumState.initialize@POLYN225588 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00164"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#164"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00164] In method org.apache.kafka.raft.QuorumState.localIdOrSentinel@POLYN229930 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00168"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#168"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00168] In method org.apache.kafka.raft.QuorumState.localIdOrThrow@POLYN230066 the MagicNumber/String  'Required local id is not present' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00180"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#180"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00180] In method org.apache.kafka.raft.QuorumState.leaderIdOrSentinel@POLYN230442 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00208"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#208"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00208] For method isVoter arguments int  nodeId"
}} 
,
{ "ligne" : {
   "c1" : "00216"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#216"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00216] For method transitionToResigned arguments List&lt;Integer &gt;  preferredSuccessors"
}} 
,
{ "ligne" : {
   "c1" : "00218"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#218"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00218] In method org.apache.kafka.raft.QuorumState.transitionToResigned@POLYN231782 the MagicNumber/String  'Invalid transition to Resigned state from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00233"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#233"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00233] In method org.apache.kafka.raft.QuorumState.transitionToResigned@POLYN231782 the MagicNumber/String  'Completed transition to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00237"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#237"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00237] For method transitionToUnattached arguments int  epoch"
}} 
,
{ "ligne" : {
   "c1" : "00240"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#240"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00240] In method org.apache.kafka.raft.QuorumState.transitionToUnattached@POLYN232587 the MagicNumber/String  'Cannot transition to Unattached with epoch= ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00241"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#241"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00241] In method org.apache.kafka.raft.QuorumState.transitionToUnattached@POLYN232587 the MagicNumber/String  ' from current state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00268"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#268"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00268] For method transitionToVoted arguments int  epoch|int  candidateId"
}} 
,
{ "ligne" : {
   "c1" : "00273"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#273"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00273] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  'Cannot transition to Voted with votedId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00274"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#274"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00274] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' since it matches the local broker.id' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00276"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#276"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00276] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  'Cannot transition to Voted with votedId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' since the local broker.id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00277"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#277"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00277] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' is not a voter' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00279"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#279"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00279] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  'Cannot transition to Voted with voterId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00280"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#280"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00280] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' since it is not one of the voters ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00285"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#285"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00285] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  'Cannot transition to Voted with votedId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' since the current epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00286"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#286"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00286] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' is larger' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00288"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#288"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00288] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  'Cannot transition to Voted with votedId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00289"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#289"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00289] In method org.apache.kafka.raft.QuorumState.transitionToVoted@POLYN234189 the MagicNumber/String  ' from the current state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00307"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#307"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00307] For method transitionToFollower arguments int  epoch|int  leaderId"
}} 
,
{ "ligne" : {
   "c1" : "00312"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#312"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00312] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  'Cannot transition to Follower with leaderId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00313"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#313"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00313] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' since it matches the local broker.id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00315"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#315"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00315] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  'Cannot transition to Follower with leaderId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00316"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#316"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00316] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' since it is not one of the voters ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00321"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#321"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00321] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  'Cannot transition to Follower with leaderId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' since the current epoch ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00322"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#322"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00322] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' is larger' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00325"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#325"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00325] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  'Cannot transition to Follower with leaderId=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' and epoch=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00326"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#326"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00326] In method org.apache.kafka.raft.QuorumState.transitionToFollower@POLYN236114 the MagicNumber/String  ' from state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00342"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#342"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00342] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  'Cannot transition to Candidate since the local broker.id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00343"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#343"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00343] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  ' is not one of the voters ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00345"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#345"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00345] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  'Cannot transition to Candidate since the local broker.id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00346"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#346"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00346] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  ' since this node is already a Leader with state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00349"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#349"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00349] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00350"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#350"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00350] In method org.apache.kafka.raft.QuorumState.transitionToCandidate@POLYN237762 the MagicNumber/String  1 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00367"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#367"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00367] In method org.apache.kafka.raft.QuorumState the MagicNumber/String  'Cannot transition to Leader since the local broker.id=' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00368"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#368"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00368] In method org.apache.kafka.raft.QuorumState the MagicNumber/String  ' is not one of the voters ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00370"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#370"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00370] In method org.apache.kafka.raft.QuorumState the MagicNumber/String  'Cannot transition to Leader from current state ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00375"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#375"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00375] In method org.apache.kafka.raft.QuorumState the MagicNumber/String  'Cannot become leader without majority votes granted' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00401"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#401"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00401] For method transitionTo arguments EpochState  state"
}} 
,
{ "ligne" : {
   "c1" : "00402"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#402"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00402] In method org.apache.kafka.raft.QuorumState.transitionTo@POLYN239950 the MagicNumber/String  null should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.raft.QuorumState.transitionTo@POLYN239950 the MagicNumber/String  'Failed to transition from ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00407"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#407"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00407] In method org.apache.kafka.raft.QuorumState.transitionTo@POLYN239950 the MagicNumber/String  ' to ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00413"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#413"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00413] In method org.apache.kafka.raft.QuorumState.transitionTo@POLYN239950 the MagicNumber/String  'Completed transition to {}' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00417"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#417"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00417] In method org.apache.kafka.raft.QuorumState.randomElectionTimeoutMs@POLYN240710 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00418"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#418"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00418] In method org.apache.kafka.raft.QuorumState.randomElectionTimeoutMs@POLYN240710 the MagicNumber/String  0 should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00422"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#422"
 , "c2" : "MINOR"
 , "c3" : "QC-JAV000006[00422] For method canGrantVote arguments int  candidateId|boolean  isLogUpToDate"
}} 
,
{ "ligne" : {
   "c1" : "00429"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#429"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00429] In method org.apache.kafka.raft.QuorumState.followerStateOrThrow@POLYN241144 the MagicNumber/String  'Expected to be Follower, but the current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00435"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#435"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00435] In method org.apache.kafka.raft.QuorumState.votedStateOrThrow@POLYN241390 the MagicNumber/String  'Expected to be Voted, but current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00441"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#441"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00441] In method org.apache.kafka.raft.QuorumState.unattachedStateOrThrow@POLYN241636 the MagicNumber/String  'Expected to be Unattached, but current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00448"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#448"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00448] In method org.apache.kafka.raft.QuorumState the MagicNumber/String  'Expected to be Leader, but current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00464"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#464"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00464] In method org.apache.kafka.raft.QuorumState.resignedStateOrThrow@POLYN242702 the MagicNumber/String  'Expected to be Resigned, but current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00470"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#470"
 , "c2" : "MAJOR"
 , "c3" : "QC-JAV000010[00470] In method org.apache.kafka.raft.QuorumState.candidateStateOrThrow@POLYN242948 the MagicNumber/String  'Expected to be Candidate, but current state is ' should be converted to const"
}} 
,
{ "ligne" : {
   "c1" : "00179"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#179"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00179] Public method leaderIdOrSentinel is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00196"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#196"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00196] Public method hasLeader is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00200"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#200"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00200] Public method hasRemoteLeader is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
,
{ "ligne" : {
   "c1" : "00212"
 , "c1link" : "./qc/raft/src/main/java/org/apache/kafka/raft/QuorumState.java.html#212"
 , "c2" : "BLOCKER"
 , "c3" : "QC-JAV000003[00212] Public method isObserver is dealing with none of the public properties of the class. Risk of useless strong coupling"
}} 
]
};
console.log('leListeStr 99 main end');
